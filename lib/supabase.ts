import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://rjwbhspajxvkugbpxuko.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqd2Joc3Bhanh2a3VnYnB4dWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwODY3MjIsImV4cCI6MjA1MzY2MjcyMn0.RET1IFSQba9QMKeyFSotu3RHvb9GEUuhyG5mQa1_MUE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)