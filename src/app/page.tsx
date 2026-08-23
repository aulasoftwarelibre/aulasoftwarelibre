"use client";
import Navbar from "@/app/components/navbar/navbar";
import Header from "@/app/components/header/header";

import { useState } from "react";


export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  return (
    <div className="relative" style={{ minHeight: "100vh" }}>
        <Navbar />
        <Header />
    </div>
  );
}