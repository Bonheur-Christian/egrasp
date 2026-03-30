"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import AuthImageCarousel from "@/components/custom/common/AuthImageCarousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/custom/auth/LoginForm";
import SignupForm from "@/components/custom/auth/SignupForm";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next13-progressbar";

export default function LoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {};

  return (
    <div className="w-full bg-slate-50 flex flex-col md:flex-row max-h-screen">
      <AuthImageCarousel />
      {/* Right side - Form */}
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <Button
          onClick={() => router.push("/")}
          variant="outline"
          className=" flex items-center gap- 6 rounded-lg cursor-pointer text-md hover:scale-90 duration-300 px-6 py-6 hover:bg-slate-50 border border-primary text-gray-600 bg-slate-50 w-1/6 "
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </Button>
        <div className="max-w-md mx-auto w-full">
          <div className="flex flex-col justify-center items-center space-y-4">
            <Link
              href="/"
              className="text-3xl font-bold text-primary flex items-center"
            >
              <Image
                src="/images/logo.png"
                height={100}
                width={100}
                alt="eGrasp Logo"
              />
              <span className="pt-8">eGrasp</span>
            </Link>
            {activeTab === "login" && (
              <p className="text-gray-500 text-sm">
                Already have an account ?{" "}
              </p>
            )}
            <h1 className="text-xl font-semibold text-primary mb-4 text-center">
              {activeTab === "login"
                ? "Login to your account"
                : "Register a new account"}
            </h1>
          </div>
          <Tabs
            value={activeTab}
            onValueChange={(val) => setActiveTab(val as "login" | "signup")}
          >
            <TabsList className="w-full px-0 py-6 my-6 rounded-full bg-primary/10 bg-slate-10 border border-primary/20 data-[orientation=horizontal]:justify-center data-[orientation=vertical]:justify-start mb-10 duration-300">
              <TabsTrigger
                value="login"
                className="py-6 cursor-pointer  font-medium text-md data-[state=active]:hover:text-white"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="py-6 cursor-pointer font-medium text-md  data-[state=active]:hover:text-white"
              >
                Register
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="login"
              className="min-h-[400px] transition-all duration-300 ease-in-out data-[state=inactive]:opacity-0 data-[state=active]:opacity-100 data-[state=inactive]:translate-y-2 data-[state=active]:translate-y-0"
            >
              <LoginForm />
            </TabsContent>

            <TabsContent
              value="signup"
              className="min-h-[400px] transition-all duration-300 ease-in-out data-[state=inactive]:opacity-0 data-[state=active]:opacity-100 data-[state=inactive]:translate-y-2 data-[state=active]:translate-y-0"
            >
              <SignupForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
