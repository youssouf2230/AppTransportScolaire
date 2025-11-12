'use client';

import { useState } from "react";
import Link from "next/link";
import { Google } from "developer-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "../shared/submit-button";
import { handleLogin } from "@/actions/auth-action";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
    const [state, setState] = useState<any>(null);
    const [pending, setPending] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);

        const formData = new FormData(e.currentTarget);
        const result = await handleLogin(null, formData);
        setState(result);

        setPending(false);

        if (!result?.errors && !result?.message) {
            // Redirection après succès
            router.push('/'); // ou la page souhaitée après login
        }
    };

    return (
        <div className="flex justify-center items-center w-full">
            <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
                {/* Header */}
                <div className="flex flex-col items-center gap-1 text-center mb-3">
                    <div className="w-12 h-12 relative">
                        <Image src="/login.gif" alt="Login" fill className="object-contain" />
                    </div>
                    <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                        Welcome Back
                    </h1>
                    <p className="text-gray-500 text-xs">
                        Please enter your credentials
                    </p>
                </div>

                {/* Form */}
                <form
                    className={cn("flex flex-col gap-2", className)}
                    {...props}
                    onSubmit={handleSubmit}
                >
                    {[
                        { id: "email", label: "Email", type: "email", placeholder: "m@example.com" },
                        { id: "password", label: "Password", type: "password", placeholder: "********" },
                    ].map(({ id, label, type, placeholder }) => (
                        <div key={id} className="grid gap-1">
                            <Label htmlFor={id} className="text-xs">{label}</Label>
                            <Input
                                id={id}
                                name={id}
                                type={type}
                                placeholder={placeholder}
                                className="text-xs py-1"
                                defaultValue={state?.data?.[id]}
                            />
                            {state?.errors?.[id] && (
                                <p className="text-red-500 text-[10px]">
                                    {state.errors[id][0]}
                                </p>
                            )}
                        </div>
                    ))}

                    {/* General Errors */}
                    {state?.message && (
                        <p className="text-red-500 text-[10px] text-center">{state.message}</p>
                    )}

                    {/* Submit */}
                    <SubmitButton pending={pending} type="submit" className="w-full py-1 mt-1 text-xs">
                        Login
                    </SubmitButton>

                    {/* Or continue with */}
                    <div className="relative text-center text-[10px] my-1 after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-gray-300">
                        <span className="bg-white dark:bg-gray-900 relative z-10 px-1 text-gray-500">
                            Or continue with
                        </span>
                    </div>

                    <Button variant="outline" className="w-full py-1 text-xs" type="button">
                        <Google className="mr-1 h-3 w-3" />
                        Google
                    </Button>

                    {/* Footer */}
                    <p className="text-center text-[10px] mt-2">
                        Don’t have an account?{" "}
                        <Link href="/register" className="underline underline-offset-2 hover:text-indigo-600">
                            Register
                        </Link>
                    </p>
                    <p className="text-center text-[10px] mt-1">
                        <Link href="/forgot-password" className="text-indigo-600 hover:underline">
                            Forgot password?
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
