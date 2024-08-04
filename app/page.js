"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import Navbar from "../components/NavBar/Navbar";
import dynamic from "next/dynamic";
import Timer from "@/components/Timer/timer";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 5000);
    })();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow items-center justify-center">
        <AnimatePresence mode="wait">
          {isLoading && 
          <Preloader />}
        </AnimatePresence>
        <Scene />
        <Timer/>
      </main>
    </div>
  );
}