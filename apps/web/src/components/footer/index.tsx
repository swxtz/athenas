import { DesktopFooter } from "./desktop";
import { MobileFooter } from "./mobile";

export function Footer() {
  return (
    <footer>
      <div className="flex md:hidden mx-auto">
        <MobileFooter />
      </div>
      <div className="hidden md:flex">
        <DesktopFooter />
      </div>
    </footer>
  );
}
