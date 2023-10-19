"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
    {
        label: "Hjem",
        href: "/",
    },
    {
        label: "Spørsmål",
        href: "/questions",
    }
    ]

 
export default function Navbar() {
    const pathname = usePathname()

    const checkActivePath = (path: string) => {
    return path === pathname
    }


    return (
        <nav className="mb-6 flex gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${checkActivePath(item.href) ? "underline" : ""}text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out focus:outline-none focus:underline`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )
}
