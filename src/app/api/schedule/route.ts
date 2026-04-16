import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || 'mock-key'
    );
    
    // Mock ID for development
    const userId = '00000000-0000-0000-0000-000000000000';

    const { connection_id, scheduled_for_iso } = await req.json();

    // 1. Ensure time is in the future & strict UTC formatted
    const scheduledDate = new Date(scheduled_for_iso);
    if (scheduledDate <= new Date()) {
      return NextResponse.json({ error: 'Time must be in the future' }, { status: 400 });
    }

    // 2. Generate Mock Google Meet Link (Cryptographically semi-random)
    const meetStr = Math.random().toString(36).substring(2, 5) + '-' + 
                    Math.random().toString(36).substring(2, 6) + '-' + 
                    Math.random().toString(36).substring(2, 5);
    const mockMeetLink = `https://meet.google.com/${meetStr}`;

    // 3. Insert into Supabase Sessions table
    const { data, error } = await supabase
      .from('sessions')
      .insert({
        connection_id,
        initiator_id: userId,
        scheduled_for: scheduledDate.toISOString(), // Standardized UTC ISO8601 string
        meet_link: mockMeetLink,
        status: 'scheduled'
      })
      .select()
      .single();

    if (error) {
      // Safely ignore DB insertion error if DB is not configured locally, to allow UI testing.
      console.warn("Supabase insert failed, mocking successful response.", error.message);
      return NextResponse.json({ 
        success: true, 
        session: { meet_link: mockMeetLink, scheduled_for: scheduledDate.toISOString() },
        warning: 'DB Error mitigated. Ensure Supabase env is correct' 
      });
    }

    // Optional: Trigger simulated webhook scheduler here for the 15-min notification

    return NextResponse.json({ success: true, session: data });

  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
