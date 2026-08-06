"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail } from "lucide-react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        <div className="rounded-2xl border border-zinc-800/80 bg-[#191919] p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-white">Welcome back</h1>
            <p className="text-zinc-400">Enter your account details below, or Sign Up</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="exampleaddress@gmail.com" value={email} required />
            </div>

          </form>

        </div>

      </motion.div>
    </div>
  );
}