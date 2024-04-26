import { useForm } from "react-hook-form";
import { z } from "zod";

export function LoginForm() {
  const form = useForm();

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(255),
  });
  
  return (
    <h2>LoginForm</h2>
  );
}