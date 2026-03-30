"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next13-progressbar";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Communities", href: "/communities" },
    { label: "Courses", href: "/courses" },
    { label: "Blog", href: "/blogs" },
    { label: "About Us", href: "/about-us" },
  ];

  return (
    <nav className="px-8 py-6 sticky top-0 bg-blue-100/80 backdrop-blur-md z-50 border-b border-blue-200">
      <div className="flex items-center justify-between max-w-[90%] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-primary flex items-center"
        >
          <Image
            src="/images/logo.png"
            height={100}
            width={50}
            alt="eGrasp Logo"
          />
          <span className="pt-4">eGrasp</span>
        </Link>

        {/* Center Navigation Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-gray-600 hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:h-[2px] after:bg-blue-600 after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 ${
                  isActive
                    ? "after:w-full text-blue-600"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side - Login and Sign Up */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => router.push("auth")}
            variant="outline"
            size="lg"
            className="bg-blue-100 hover:bg-blue-100 text-primary py-5 px-6 border border-primary cursor-pointer hover:scale-105 duration-300 rounded-md"
          >
            Login
          </Button>
          <Button
            onClick={() => router.push("auth")}
            size="lg"
            className="bg-primary hover:bg-primary/80 text-white rounded-md px-6 py-5 cursor-pointer hover:scale-105 duration-300"
          >
            Join Free
          </Button>
        </div>
      </div>
    </nav>
  );
}
