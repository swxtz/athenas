import { Navbar } from "@/components/navbar";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Hero } from "./components/hero";

export function HomePage() {
  useDocumentTitle("Pagína inicial");

  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <>
        <Hero />
      </>
    </div>
  );
}