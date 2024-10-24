import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

interface CategoryButtonProps {
  name: string;
  href: string;
  image?: string | StaticImport;
}

export function CategoryButton({ href, name, image }: CategoryButtonProps) {
  return (
    <Link href={href} className="text-zinc-950 bg-brown-100 hover:bg-brown-200 px-6 py-3 flex rounded-lg font-semibold">{name}</Link>
  );
}