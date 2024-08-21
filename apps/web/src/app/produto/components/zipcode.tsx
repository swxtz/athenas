"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { MapPin } from "lucide-react";

export function Zipcode() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-2">
          <MapPin />
          <span>Calcular frete</span>
        </Button>
      </DialogTrigger>
    </Dialog>
  );
}
{/* <div className="">
  <MapPin />
  <input type="text" placeholder="Calcular frete e prazo" />
</div>; */}
