"use client";

import { paymentMethods } from "@/data/payment-methods";
import { PaymentMethodCard } from "./payment-method-card";
import { cuid } from "@/utils/cuid";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useQueryState } from "nuqs";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  payment: z.enum(["pix", "mastercard", "visa"], {
    required_error: "Selecione uma forma de pagamento",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export function PaymentMethod() {
  const [payment, setPayment] = useQueryState("payment");

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  // Restrict the type of value to the enum values defined in formSchema
  function handlePaymentChange(value: FormSchema["payment"]) {
    setPayment(value);
    form.setValue("payment", value);
  }

  return (
    <div className="flex gap-8 justify-center items-center w-fit">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})}>
          <FormField
            control={form.control}
            name="payment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) =>
                      handlePaymentChange(value as FormSchema["payment"])
                    } // Cast value if needed
                    defaultValue={field.value}
                  >
                    {paymentMethods.map((method) => (
                      <div key={cuid()}>
                        <FormItem>
                          <FormControl>
                            <div>
                              <RadioGroupItem
                                value={method.name}
                                id={method.name}
                                disabled={!method.isAvailable}
                                className=""
                              />
                              <Label htmlFor={method.name}>
                                <PaymentMethodCard
                                  logo={method.logo}
                                  alt={method.alt}
                                  isAvailable={method.isAvailable}
                                />
                              </Label>
                            </div>
                          </FormControl>
                        </FormItem>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
