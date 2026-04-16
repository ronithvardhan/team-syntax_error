import { createClient } from "@supabase/supabase-js";

// Replace these values below with your project URL and public key if they change
const SUPABASE_URL = "https://wevwxlwqseknugeuqoxu.supabase.co";
const SUPABASE_PUBLIC_KEY = "sb_publishable_s9gIblZK5F-7rIFJvpqASw_t3Mu7Ehp";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
