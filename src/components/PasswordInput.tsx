
"use client";

import { useState, ComponentProps } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";

type PasswordInputProps = ComponentProps<typeof Input>

export function PasswordInput(props: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <div className="relative">
            <Input
                {...props}
                type={showPassword ? "text" : "password"}
                className="border-zinc-700 text-white pr-10 transition-colors duration-500 hover:border-[#d7689a] focus-visible:border-[#c81464] focus-visible:ring-pink-500 focus-visible:ring-1 focus-visible:ring-offset-0" />

            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-pink-400"
                aria-label={showPassword ? "Hide password" : "Show password"}>

                {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}

            </button>
        </div>
    );
}