import { Navbar } from "@/components/navbar";
import { useDocumentTitle } from "@/hooks/use-document-title";

export function HomePage() {
  useDocumentTitle("Pagína inicial");

  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <h1>Home Page</h1>
    </div>
  );
}