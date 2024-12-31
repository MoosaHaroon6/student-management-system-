"use client";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";
import { useState } from "react";

type PropType = {
    signup?: boolean;
    func: (email: string, password: string, role?: string) => void;
    errorMsg: string;
};

export default function AuthForm({ func, signup }: PropType) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState('Teacher');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password || (signup && !role)) {
            toast({
                description: "Please enter all details!"
            });
            return;
        }
        func(email, password, role);
    };

    return (
        <div className="m-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-xl mt-10 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-extrabold text-center">{signup ? "SignUp" : "Login"}</h1>
                <div className="max-w-full flex items-center justify-between gap-2">
                    <label htmlFor="email" className="text-lg">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border h-12 rounded-lg text-balance p-4 focus:border-rose-700 focus:ring-1 focus:ring-rose-600 outline-none"
                        placeholder="example@gmail.com"
                    />
                </div>
                <div className="max-w-full flex items-center justify-between gap-2">
                    <label htmlFor="password" className="text-lg">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border h-12 rounded-lg text-balance p-4 focus:border-rose-700 focus:ring-1 focus:ring-rose-600 outline-none"
                        placeholder="*******"
                    />
                </div>
                {signup && (
                    <div className="max-w-full flex items-center justify-center gap-2">
                        <label htmlFor="role">Select Role:</label>
                        <select
                            value={role}
                            className="w-[200px] border rounded-md bg-slate-50 h-12 p-2 focus:border-rose-700 focus:ring-1 focus:ring-rose-600 outline-none"
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="Teacher">Teacher</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                )}
                <button
                    type="submit"
                    className="bg-rose-600 w-full h-10 text-white rounded-md text-sm hover:bg-rose-700"
                >
                    {signup ? "Create Account" : "Login"}
                </button>
                {signup ? (
                    <p className="flex gap-3 ">
                        Already have an account?
                        <Link href="/login" className="text-rose-600">
                            Login Here
                        </Link>
                    </p>
                ) : (
                    <p className="flex gap-3 ">
                        Don't have an account?
                        <Link href="/signup" className="text-rose-600">
                            Create Account
                        </Link>
                    </p>
                )}
            </form>
        </div>
    );
}
