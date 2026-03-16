"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next13-progressbar";
import Image from "next/image";

export function Navbar() {
    const router = useRouter();
    const navItems = [
        { label: "Home", href: "#" },
        { label: "Product", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Blog", href: "#" },
        { label: "About Us", href: "#" },
    ];

    return (
        <nav className="px-8 py-6 sticky top-0 bg-slate-50 z-50 border-b border-slate-200">
            <div className="flex items-center justify-between max-w-[90%] mx-auto">
                {/* Logo */}
                <Link href="/" className="text-3xl font-bold text-primary flex items-center">
                    <Image src="/images/logo.png" height={100} width={50} alt="test" />
                    <span className="pt-4">Grasp</span>
                </Link>

                {/* Center Navigation Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-gray-600 hover:text-teal-600 transition-colors hove:scale-105 duration-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Right Side - Login and Sign Up */}
                <div className="flex items-center gap-4">
                    <Button
                        onClick={() => router.push("auth/login")}
                        variant="outline"
                        className="bg-slate-100 text-teal-600 hover:text-teal-600 border border-teal-500 cursor-pointer hover:scale-105 duration-300"
                    >
                        Login
                    </Button>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-md px-6 py-2 cursor-pointer hover:scale-105 duration-300">
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}