// backend/supabaseClient.js
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const EXPRESS_SUPABASE_URL = process.env.SUPABASE_URL;
const EXPRESS_SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

console.log("DEBUG ENV:", {
  url: process.env.SUPABASE_URL,
  key: process.env.SUPABASE_ANON_KEY ? "OK" : "NOT FOUND",
});

export const supabase = createClient(
  EXPRESS_SUPABASE_URL,
  EXPRESS_SUPABASE_ANON_KEY
);
