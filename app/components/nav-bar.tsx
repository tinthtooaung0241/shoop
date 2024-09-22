import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/action/get-categories";
import NavBarAction from "./navbar-action";

export const revaliade = 0;

const NavBar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-4 lg:ml-0 flex gap-x-2">
            <p className="font-bold text-xl">SHOOP</p>
          </Link>
          <MainNav data={categories} />
          <NavBarAction />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
