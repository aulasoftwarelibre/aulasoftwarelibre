"use client";
import Link from "next/link";

type NavItem = {
    label: string;
    href?: string;
    external?: boolean;
    children?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
    { label: "Inicio", href: "/" },
    {
        label: "El Aula",
        children: [
            { label: "¿Quiénes somos?", href: "/us" },
            { label: "Consejo Asesor", href: "/the-team" },
            { label: "Documentos", href: "/docs" },
        ],
    },
    { label: "SalmorejoTech", href: "https://salmorejo.tech/", external: true },
    { label: "Noticias", href: "/news" },
    { label: "Talleres", href: "/activities" },
    { label: "Podcast", href: "/podcast" },
    { label: "Empleo", href: "/employees" },
    { label: "Ideas", href: "https://ideas.aulasoftwarelibre.uco.es/idea", external: true },
    {
        label: "Servicios",
        children: [
            { label: "Directorio", href: "/directory" },
            { label: "Lista de correo", href: "/mail-list" },
        ],
    },
    { label: "Contacto", href: "/contact" },
];

const itemClass =
    "px-2 py-2 sm:px-3 md:px-[1vw] text-white text-sm sm:text-base cursor-pointer hover:bg-neutral-700 transition-colors";
const dropdownClass =
    "px-4 py-2.5 text-[0.95rem] text-neutral-100 no-underline hover:bg-neutral-700 whitespace-nowrap";

function Dropdown({ label, items, alignRight }: { label: string; items: { label: string; href: string }[]; alignRight?: boolean }) {
    return (
        <div className={`group relative ${itemClass}`}>
            <span className="whitespace-nowrap">{label} ▾</span>
            <div
                className={`absolute top-full min-w-180px flex flex-col bg-neutral-900 shadow-lg z-50
                            opacity-0 invisible translate-y-1.5
                            transition-all duration-200
                            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                            ${alignRight ? "right-0" : "left-0"}`}
            >
                {items.map((child) => (
                    <Link key={child.href} href={child.href} className={dropdownClass}>
                        {child.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default function Navbar() {
    return (
        <div className="w-full bg-neutral-800 fixed top-0 left-0 z-1000 shadow-md">
            <div className="w-full lg:w-11/12 xl:w-4/5 mx-auto flex flex-row flex-wrap items-center justify-center lg:justify-start px-2">
                {NAV_ITEMS.map((item) =>
                    item.children ? (
                        <Dropdown
                            key={item.label}
                            label={item.label}
                            items={item.children}
                            alignRight={item.label === "Servicios"}
                        />
                    ) : (
                        <div key={item.label} className={itemClass}>
                            <Link
                                href={item.href!}
                                target={item.external ? "_blank" : undefined}
                            >
                                {item.label}
                            </Link>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
