import { DesktopFooter } from "./desktop";
import { MobileFooter } from "./mobile";

export function Footer() {
  return (
    <footer>
      <div className="flex md:hidden">
        <MobileFooter />
      </div>
      <div className="hidden md:flex">
        <DesktopFooter />
      </div>
    </footer>
  );
}
