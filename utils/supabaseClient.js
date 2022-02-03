import { createClient } from '@supabase/supabase-js'
import {CREDENTIALS} from '../creds'
const supabaseUrl = CREDENTIALS.URL 
const supabaseAnonKey = CREDENTIALS.APP_KEY 
export const supabase = createClient(supabaseUrl, supabaseAnonKey)