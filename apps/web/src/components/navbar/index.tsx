"use client";

import Image from "next/image";
import logo from "@/images/logo-rn.png";
import { Home, MenuIcon, Phone, ShoppingBasket } from "lucide-react";
import { PiShoppingCart } from "react-icons/pi";
import { TbShoppingBagHeart } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";

import {
  Dialog,
  DialogPortal,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
} from "@radix-ui/react-dialog";
import { Avatar } from "../avatar";
import Link from "next/link";
import { LuUser } from "react-icons/lu";
import { Separator } from "../ui/separator";
import type { ActiveLinkProps } from "../active-link";
import { useEffect, useState } from "react";
import { MobileMenu } from "../menu/mobile-menu";
import { DesktopMenu } from "../menu/desktop-menu";
import { Categories } from "./categories";
import { Button } from "../ui/button";
import { setCookie } from "nookies";
import { useDebounce } from "@/hooks/use-debounce";
import { api } from "@/lib/axios";
import { AutoComplete } from "../searchbar";
import { redirect } from "next/navigation";
import { MobileProfile } from "./mobile-profile";

const links: ActiveLinkProps[] = [
  { href: "/", children: "Home", icon: <Home /> },
  { href: "/produtos", children: "Produtos", icon: <ShoppingBasket /> },
  { href: "/contato", children: "Contato", icon: <Phone /> },
];

async function handleGetSearchValue(search: string) {
  const res = await api.get(`/odin/search-products?search=${search}`);
  return res.data;
}

export function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debouncedSearchValue) {
      return;
    }

    handleGetSearchValue(debouncedSearchValue).then((res) => {
      const formattedOptions = res.data.map((option: any) => ({
        label: option.name,
        value: option.slug,
      }));
      setOptions(formattedOptions);
    });
  }, [debouncedSearchValue]);

  useEffect(() => {
    if(selectedValue) {
      redirect(`/produto/${selectedValue}`);
    }
  }, [selectedValue]);

  return (
    <nav className="fixed top-0 left-0 bg-white w-full h-24 self-center md:h-32 flex flex-col border-b-1 z-50">
      <div className="flex w-full items-center container justify-between p-2">
        {/* <div className="">
          <Searchbar/>
        </div> */}

        <div className="flex items-center md:hidden ml-4">
          <div className="">
            {/* <MobileMenu /> */}
            <MobileProfile />
          </div>
        </div>

        <Link href="/">
          <Image
            src={logo}
            alt="logo RN Distribuidora"
            quality={100}
            className="w-20 mr-10 md:w-30"
          />
        </Link>
        {/* logo */}

        <div className="items-center hidden md:w-2/6 px-4 md:flex flex-cow">
          {/* <button type="button">
            <IoSearch size={28} />
          </button>
          <input
            type="text"
            className="pl-2 h-12 w-full outline-none"
            onChange={(e) => setSearchValue(e.target.value)}
          /> */}
          {/* <SearchBar  /> */}
          <AutoComplete
            selectedValue={selectedValue}
            onSelectedValueChange={setSelectedValue}
            searchValue={searchValue}
            onSearchValueChange={setSearchValue}
            items={options ?? []}
            // Optional props
            isLoading={loading}
            emptyMessage="Digite o nome de um produto"
            placeholder="O que você precisa?"
            
          />
          
        </div> 
        {/* pesquisa */}
        <div className="flex-row items-center flex">
          <Button
            variant={"ghost"}
            className="flex justify-center items-center p-2 mr-2"
            asChild
          >
            <Link href="/carrinho" className="">
              <TbShoppingBagHeart size={28} className="" />
            </Link>
          </Button>
          {/* carrinho */}

          <div className="hidden md:flex items-center gap-8">
            <DesktopMenu />
          </div>
          {/* login */}
        </div>
      </div>
      {/* <div className="hidden md:flex p-4 bg-white h-full border-b-1">
        <div className="mt-4 hidden md:flex mx-auto">
          <Categories />
        </div>
      </div> */}
    </nav>
  );
}
