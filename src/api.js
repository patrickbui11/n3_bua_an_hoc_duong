import { createClient } from "@supabase/supabase-js";

const API_URL = "https://cqavppatdtypcpbonkcl.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDA5NTY3NywiZXhwIjoxOTU1NjcxNjc3fQ.lubAbLv2qbou0zfHD4y-gczDb1gWCkv7c27_DbIy5oc";
export const supabase = createClient(API_URL, API_KEY);
