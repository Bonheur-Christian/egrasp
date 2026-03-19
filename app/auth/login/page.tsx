"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {};

  return (
    <div className="w-full bg-slate-50 flex flex-col md:flex-row max-h-screen">
      {/* Left side - Image */}
      <div className="md:w-1/2 relative ">
        <div className="absolute inset-0"></div>
        <Image
          src="/images/login.png"
          alt="Students in classroom"
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-8 left-8 text-white z-10">
          <h2 className="text-4xl font-bold mb-2">Lorem Ipsum is simply</h2>
          <p className="text-lg opacity-90">Lorem Ipsum is simply</p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl font-semibold text-gray-800 mb-8">
            Welcome to lorem.!
          </h1>

          {/* Tab buttons */}
          <div className="flex gap-4 mb-8">
            <Button
              variant={activeTab === "login" ? "default" : "ghost"}
              onClick={() => setActiveTab("login")}
              className={`flex-1 rounded-full py-6 text-base font-medium transition-all ${
                activeTab === "login"
                  ? "bg-teal-400 hover:bg-teal-500 text-white shadow-lg"
                  : "bg-teal-100 hover:bg-teal-200 text-teal-700"
              }`}
            >
              Login
            </Button>
            <Button
              variant={activeTab === "register" ? "default" : "ghost"}
              onClick={() => setActiveTab("register")}
              className={`flex-1 rounded-full py-6 text-base font-medium transition-all ${
                activeTab === "register"
                  ? "bg-teal-400 hover:bg-teal-500 text-white shadow-lg"
                  : "bg-teal-100 hover:bg-teal-200 text-teal-700"
              }`}
            >
              Register
            </Button>
          </div>

          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username field */}
            <div className="space-y-2">
              <Label
                htmlFor="username"
                className="text-gray-700 text-sm font-medium"
              >
                User name
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-6 rounded-xl border-gray-200 focus:border-teal-400 focus:ring-teal-400 text-base"
              />
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-gray-700 text-sm font-medium"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-6 rounded-xl border-gray-200 focus:border-teal-400 focus:ring-teal-400 text-base pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                  className="border-gray-300 data-[state=checked]:bg-teal-400 data-[state=checked]:border-teal-400"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-700 cursor-pointer select-none"
                >
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-teal-600 hover:text-teal-700 font-medium"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full bg-teal-400 hover:bg-teal-500 text-white rounded-full py-6 text-base font-medium shadow-lg transition-all"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
