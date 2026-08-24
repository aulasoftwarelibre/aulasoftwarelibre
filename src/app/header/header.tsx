"use client";
import Image from "next/image";
import logo from "@/app/assets/logo-cuadrado_white-alpha.svg";

export default function Header() {
  return (
    <div className="w-full pt-[3vw] bg-linear-to-r from-[#560f2a] via-[#60102f] via-70% to-[#540f29]">
      <div className="w-4/5 justify-self-center grid grid-cols-2">
        <Image
          src={logo}
          alt="logo aula de software libre"
          width={200}
          height={80}
          className="py-[5vw]"
        />
        <p className="self-center font-extrabold text-4xl ">El conocimiento debe ser compartido.<br/>El software es conocimiento.</p>
      </div>
    </div>
  );
}
