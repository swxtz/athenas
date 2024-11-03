import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cuid } from "@/utils/cuid";
import { FreightCard } from "./freight-card";
import { Label } from "@/components/ui/label";

export function FreightSelect() {
  const today = new Date(); // Data atual
  const twoDaysFromNow = new Date(today); // Cria uma nova data a partir de hoje

  // Adiciona dois dias
  twoDaysFromNow.setDate(today.getDate() + 2);

  return (
    <RadioGroup defaultValue="sedex">
      <div className="flex items-center bg-white w-fit px-4 rounded-lg hover:brightness-90 transition-all">
        <RadioGroupItem className="" value="sedex" id="sedex" />

        <Label htmlFor="sedex" className="">
          <FreightCard price={10000} deliveryDate={twoDaysFromNow} />
        </Label>
      </div>
      <div className="flex items-center bg-white w-fit px-4 rounded-lg hover:brightness-90 transition-all">
        <RadioGroupItem className="" value="sedex2" id="sedex2" />

        <Label htmlFor="sedex2" className="">
          <FreightCard price={10000} deliveryDate={twoDaysFromNow} />
        </Label>
      </div>
      <div className="flex items-center bg-white w-fit px-4 rounded-lg hover:brightness-90 transition-all">
        <RadioGroupItem className="" value="sedex3" id="sedex3" />

        <Label htmlFor="sedex3" className="">
          <FreightCard price={10000} deliveryDate={twoDaysFromNow} />
        </Label>
      </div>
    </RadioGroup>
  );
}
