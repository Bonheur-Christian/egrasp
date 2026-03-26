"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignupForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="Enter your full name"
          className="py-6 rounded-lg"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="py-6 rounded-lg"
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Create a password"
          className="py-6 rounded-lg"
        />
      </div>

      <div className="flex justify-center pt-12">
        <Button className="w-1/2 mx-auto py-6 rounded-md bg-primary hover:bg-primary/90 text-white text-lg cursor-pointer hover:scale-90">
          Sign Up
        </Button>
      </div>
    </form>
  );
}
