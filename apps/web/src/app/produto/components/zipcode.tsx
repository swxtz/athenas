"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ErrorHelper } from "@/components/ui/error-helper";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { setCookie } from "nookies";

const formSchema = z.object({
  zipcode: z.number().min(8, "CEP inválido").max(8, "CEP inválido"),
});

type FormValues = z.infer<typeof formSchema>;

export function Zipcode() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const zipCode = form.watch("zipcode");

  const debouncedZipCode = useDebounce(zipCode, 1000);

  useEffect(() => {
    if (debouncedZipCode) {
      setCookie(null, "zipcode", debouncedZipCode.toString(), {
        path: "/", // 30 days
      });
    }
  }, [debouncedZipCode]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-2" variant={"secondary"}>
          <MapPin />
          <span>Calcular frete</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-sm min-w-[350px]">
        <h2 className="text-lg">
          Informe seu CEP para calcular frete e prazo.
          <Form {...form}>
            <form className="mt-4">
              <FormField
                control={form.control}
                name="zipcode"
                render={({ field }) => (
                  <FormItem>
                    <div className="p-2 flex flex-row gap-2 items-center border-1 rounded-md border-zinc-200 ">
                      <MapPin className="text-zinc-700" />
                      <Input
                        type="number"
                        maxLength={8}
                        placeholder="Calcular frete e prazo"
                        className="shadow-none border-none outline-none ring-0 focus-visible:outline-none focus-visible:ring-0"
                        {...field}
                      />
                      {form.formState.errors.zipcode && (
                        <ErrorHelper>
                          {form.formState.errors.zipcode.message}
                        </ErrorHelper>
                      )}
                    </div>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </h2>
      </DialogContent>
    </Dialog>
  );
}
