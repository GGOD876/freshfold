import { createBrowserClient } from "@supabase/ssr"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error("Supabase Url env config is missing")
}

if (!supabaseAnonKey) {
  throw new Error("Supabase anonymous key env config is missing")
}

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)
