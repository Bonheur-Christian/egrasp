"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import AuthImageCarousel from "@/components/custom/common/AuthImageCarousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/custom/auth/LoginForm";
import SignupForm from "@/components/custom/auth/SignupForm";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
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
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl font-semibold text-gray-800 mb-8">
            Welcome to lorem.!
          </h1>
          <Tabs defaultValue="login">
            <TabsList className="w-full px-0 py-6 my-6 rounded-full bg-primary/10 bg-slate-10 border border-primary/20 data-[orientation=horizontal]:justify-center data-[orientation=vertical]:justify-start mb-10 duration-300">
              <TabsTrigger
                value="login"
                className="py-6 cursor-pointer  font-medium text-md "
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="py-6 cursor-pointer font-medium text-md "
              >
                Register
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <LoginForm />
            </TabsContent>

            <TabsContent value="signup">
              <SignupForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
