"use client";

import { LoginForm } from "@/components/auth/login";

export default function LoginPage() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full px-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8">
                <LoginForm />
            </div>
        </div>
    );
}
