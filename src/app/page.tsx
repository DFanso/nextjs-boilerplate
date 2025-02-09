'use client'
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button onClick={handleClick}>Click me This is a shadcn button</Button>
        <p className="flex items-center justify-center">{count}</p>
      </main>
    </div>
  );
}
