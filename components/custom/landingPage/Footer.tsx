import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-[#090C68] border-t border-gray-200">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="flex space-y-4 pb-12">
          <Link
            href=""
            className="flex gap-2 border-e border-white pe-12 items-center"
          >
            <Image
              src="/images/white-logo.png"
              width={80}
              height={100}
              alt="eGrasp Logo"
            />
            <span className="text-2xl font-bold text-white pt-12">eGrasp</span>
          </Link>
          <div className="space-y-2 ps-12">
            <p className="text-lg  text-white">Skill Sharing</p>
            <p className="text-lg text-gray-300">Platform</p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4 pb-12">
          <h3 className="text-2xl font-medium text-white w-1/2 tracking-wider">
            Subscribe to get our
            <span className="text-orange-500 ps-4">Newsletter</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-5 text-white border-2 border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder:text-white/70"
            />
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-5 rounded-full transition-colors cursor-pointer"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Footer Links */}
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <Link href="/communities">Communities</Link>
              <span className="text-white">|</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span className="text-white">|</span>
              <Link href="/blogs">Blogs</Link>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              &copy; 2026 Class Technologies Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
