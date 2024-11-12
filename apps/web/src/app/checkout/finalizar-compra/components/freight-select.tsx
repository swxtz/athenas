"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FreightCard } from "./freight-card";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import sedexLogo from "@/images/freight/sedex.png";
import jtLogo from "@/images/freight/jt.svg";
import totalExpressLogo from "@/images/freight/total-express.svg";
import { useQueryState } from "nuqs";

const formSchema = z.object({
  freight: z.enum(["sedex", "jt", "totalexpress"], {
    required_error: "Selecione pelo menos uma empresa de entrega",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export function FreightSelect() {
  const [freight, setFreight] = useQueryState("freight");

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const today = new Date();
  const twoDaysFromNow = new Date(today);
  twoDaysFromNow.setDate(today.getDate() + 2);

  // Atualiza a URL sempre que o valor do frete muda
  function handleFreightChange(value: string) {
    if (value === "sedex" || value === "jt" || value === "totalexpress") {
      setFreight(value);
      form.setValue("freight", value);
    }
  }

  return (
    <h1></h1>
  );
}
