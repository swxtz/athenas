import { useDocumentTitle } from "@/hooks/use-document-title";

export function HomePage() {
  useDocumentTitle("Pagína inicial");

  return (
    <div className="">
      <h1>Home Page</h1>
    </div>
  );
}