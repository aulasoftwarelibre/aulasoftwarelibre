"use client";
import Navbar from "@/app/navbar/navbar";
import Header from "@/app/header/header";
import Landing from "./landing/landing";

import { useState } from "react";


export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  return (
    <div className="relative" style={{ minHeight: "100vh" }}>
        <Landing />
    </div>
  );
}