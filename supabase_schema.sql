-- Run this in your Supabase SQL Editor

CREATE TYPE connection_status AS ENUM ('pending', 'accepted', 'declined');
CREATE TYPE session_status AS ENUM ('scheduled', 'completed', 'canceled');

-- USERS (Extends Supabase Auth Auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  average_rating NUMERIC(3, 2) DEFAULT 0.0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- SKILLS (Master Dictionary)
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL
);

-- USER SKILLS (Junction - what I teach / what I want to learn)
CREATE TABLE user_skills (
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
  intent TEXT CHECK (intent IN ('teach', 'learn')),
  PRIMARY KEY (user_id, skill_id, intent)
);

-- CONNECTIONS (Friend/Match requests)
CREATE TABLE connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requester_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  status connection_status DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(requester_id, receiver_id)
);

-- MESSAGES (Realtime enabled)
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  connection_id UUID REFERENCES connections(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER PUBLICATION supabase_realtime ADD TABLE messages;
ALTER PUBLICATION supabase_realtime ADD TABLE connections;

-- SESSIONS (Scheduling & Video Meets)
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  connection_id UUID REFERENCES connections(id) ON DELETE CASCADE,
  initiator_id UUID REFERENCES profiles(id),
  meet_link TEXT,
  scheduled_for TIMESTAMPTZ NOT NULL,
  status session_status DEFAULT 'scheduled',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RATINGS (Anti-abuse integrated)
CREATE TABLE ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  rater_id UUID REFERENCES profiles(id),
  ratee_id UUID REFERENCES profiles(id),
  stars INTEGER CHECK (stars >= 1 AND stars <= 5),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(session_id, rater_id)
);

-- RLS EXAMPLE
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users rate completed sessions"
ON ratings FOR INSERT WITH CHECK (
  auth.uid() = rater_id AND
  EXISTS (
    SELECT 1 FROM sessions s
    JOIN connections c ON s.connection_id = c.id
    WHERE s.id = session_id 
    AND s.status = 'completed'
    AND (c.requester_id = auth.uid() OR c.receiver_id = auth.uid())
    AND s.scheduled_for < NOW()
  )
);
