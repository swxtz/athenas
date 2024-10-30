import { AboutUs } from "../card-about-us";
import { InformationMore } from "../card-more-information";

export function InformationsCard(){
  return(
    <div className="flex flex-row gap-11">

      <InformationMore />

      <AboutUs />

    </div>
  );
}