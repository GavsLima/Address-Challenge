import axios from "axios";

const supabase = axios.create({
  baseURL: "https://tlykohjwkzxksunudhuv.supabase.co/rest/v1",
  headers: {
    apiKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRseWtvaGp3a3p4a3N1bnVkaHV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU0MDEzNzUsImV4cCI6MTk2MDk3NzM3NX0.tYLwoTkywgA0--N7d7YLUG7QrnnHkBCtjBqHBY0IQSw",
  },
});

export default supabase;
