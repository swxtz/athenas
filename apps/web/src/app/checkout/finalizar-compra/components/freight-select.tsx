"use client";

import { useEffect, useState, useRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FreightCard } from "./freight-card";
import { Label } from "@/components/ui/label";
import { parseAsInteger, useQueryState } from "nuqs";
import sedexLogo from "@/images/freight/sedex.png";
import jtLogo from "@/images/freight/jt.svg";
import totalLogo from "@/images/freight/total-express.svg";

const formSchema = z.object({
  freight: z.enum(["sedex", "jt", "totalexpress"], {
    required_error: "Selecione pelo menos uma empresa de entrega",
  }),
});

function getRandomValue() {
  return Math.floor(Math.random() * (40 - 30 + 1)) + 30;
}

type FormSchema = z.infer<typeof formSchema>;

export function FreightSelect() {
  const [freight, setFreight] = useQueryState("freight");
  const [sedex, setSedex] = useQueryState("sedex", parseAsInteger);
  const [jt, setJt] = useQueryState("jt", parseAsInteger);
  const [total, setTotal] = useQueryState("total", parseAsInteger);
  const isMounted = useRef(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    isMounted.current = true;

    if (isMounted.current) {
      if (!sedex) setSedex(getRandomValue() * 100);
      if (!jt) setJt(getRandomValue() * 100);
      if (!total) setTotal(getRandomValue() * 100);
    }

    return () => {
      isMounted.current = false;
    };
  }, [sedex, setSedex, jt, setJt, total, setTotal]);

  const today = new Date();
  const twoDaysFromNow = new Date(today);
  twoDaysFromNow.setDate(today.getDate() + 2);

  function handleFreightChange(value: string) {
    if (value === "sedex" || value === "jt" || value === "totalexpress") {
      setFreight(value);
      form.setValue("freight", value);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="w-fit">
        <FormField
          control={form.control}
          name="freight"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => handleFreightChange(value)}
                  defaultValue={field.value}
                >
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center bg-white w-fit px-4 rounded-lg hover:brightness-90 transition-all">
                        <RadioGroupItem className="" value="sedex" id="sedex" />
                        <Label htmlFor="sedex" className="">
                          <FreightCard
                            price={sedex || 0}
                            deliveryDate={twoDaysFromNow}
                            logo={sedexLogo}
                          />
                        </Label>
                      </div>
                    </FormControl>
                  </FormItem>

                  <FormItem>
                    <FormControl>
                      <div className="flex items-center bg-white w-fit px-4 rounded-lg hover:brightness-90 transition-all">
                        <RadioGroupItem className="" value="jt" id="jt" />
                        <Label htmlFor="jt" className="">
                          <FreightCard
                            price={jt || 0}
                            deliveryDate={twoDaysFromNow}
                            logo={jtLogo}
                          />
                        </Label>
                      </div>
                    </FormControl>
                  </FormItem>

                  <FormItem>
                    <FormControl>
                      <div className="flex items-center bg-white w-fit px-4 rounded-lg hover:brightness-90 transition-all">
                        <RadioGroupItem
                          className=""
                          value="totalexpress"
                          id="totalexpress"
                        />
                        <Label htmlFor="totalexpress" className="">
                          <FreightCard
                            price={total || 0}
                            deliveryDate={twoDaysFromNow}
                            logo={totalLogo}
                          />
                        </Label>
                      </div>
                    </FormControl>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
