"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FreightCard } from "./freight-card";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { useQueryState } from "nuqs";
import { useQueryGetUserCeps } from "@/hooks/queries/get-user-ceps";
import { Skeleton } from "@/components/ui/skeleton";
import { GetCep } from "./get-cep";

const formSchema = z.object({
  freight: z.enum(["sedex", "jt", "totalexpress"], {
    required_error: "Selecione pelo menos uma empresa de entrega",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export function FreightSelect() {
  const [freight, setFreight] = useQueryState("freight");
  const { data: cep, isLoading } = useQueryGetUserCeps();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  if (isLoading) {
    return (
      <div className="w-[600px] flex flex-col gap-3">
        <Skeleton className="w-full h-24" />
        <Skeleton className="w-full h-24" />
        <Skeleton className="w-full h-24" />
      </div>
    );
  }

  if(cep.length === 0) {
    return (
      <div className="">
        <GetCep />
      </div>
    );
  }

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

  return <h1></h1>;
}
