"use client";
import { ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "./ui/button";

const NavBarAction = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-4">
      <Button className="flex items-center gap-2 border-2 shadow-sm">
        <ShoppingBag className="w-5 h-5" />
        <span className="ml-2 text-sm font-semibold">0</span>
      </Button>
    </div>
  );
};

export default NavBarAction;
