"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Eye, EyeOff, Mail } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("user: ", { email, username, password });
    // send to backend
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-primary-50 to-primary-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        <div className="rounded-2xl border border-zinc-800/80 bg-[#191919] p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">

            <div className="flex justify-center pb-5 -mt-5">
              <Image
                src="/HeaderLogo.png"
                alt="QueryBull logo"
                width={1000}
                height={1000}
                className="h-26 w-auto object-contain" />
            </div>

            <h1 className="text-3xl font-bold tracking-tighter text-white">Welcome!</h1>
            <p className="text-zinc-400">Enter your account details below, or Sign Up</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-300">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="exampleaddress@gmail.com"
                value={email}
                required
                className="border-zinc-700 text-white focus-visible:border-pink-500 hover:border-[#d7689a] focus-visible:ring-pink-500 focus-visible:ring-1 focus-visible:ring-offset-0  transition-colors duration-700 hover:placeholder-pink-300"
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="username" className="text-zinc-300">Username</Label>
              <div>
                <Input
                  id="username"
                  value={username}
                  required
                  className="border-zinc-700 text-white  transition-colors duration-700 hover:border-[#d7689a] focus-visible:border-pink-500 focus-visible:ring-pink-500 focus-visible:ring-1 focus-visible:ring-offset-0"
                  onChange={(e) => setUsername(e.target.value)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-300">Password</Label>
              <div>
                <Input
                  id="password"
                  value={password}
                  required
                  className="border-zinc-700 text-white  transition-colors duration-700 hover:border-[#d7689a] focus-visible:border-[#c81464] focus-visible:ring-pink-500 focus-visible:ring-1 focus-visible:ring-offset-0"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="hover:border-[#c81464] transition-colors duration-200 rounded-lg" />
                <Label htmlFor="remember" className="text-white">Remember me</Label>
              </div>

              <a href="#" className="text-sm text-primary-500 hover:text-primary-600 hover:text-pink-500">
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full transition-colors duration-300 hover:border-[#c81464] hover:bg-[#c81464] hover:text-white">
              Sign Up
            </Button>

            <Link href="/login" className="pl-1.5 text-sm text-pink-500 hover:text-pink-400">
              Login instead?
            </Link>

          </form>

        </div>

      </motion.div>
    </div>
  );
}