declare module "@supabase/supabase-js" {
  export interface Supabase {
    from(table: string): any;
    auth: any;
  }
  export function createClient(url: string, key: string): Supabase;
}
