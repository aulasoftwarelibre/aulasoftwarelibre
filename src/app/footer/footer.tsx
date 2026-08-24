"use client";
import Image from "next/image";
import logo from "@/app/assets/logo-cuadrado_white-alpha.svg";

export default function Footer() {
    return (
        <div className="w-full pt-[3vw] bg-linear-to-r from-[#560f2a] via-[#60102f] via-70% to-[#540f29] md:-mt-20">
            <div className="w-4/5 justify-self-center">
                <Image
                    src={logo}
                    alt="logo aula de software libre"
                    width={100}
                    height={80}
                    className="py-[5vw]"
                />
            </div>
        </div>
    )
}