"use client"

import AuthForm from "@/components/authForm";
import { auth } from "@/firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"

export default function Login() {

    const [error, setError] = useState('');

    const { toast } = useToast();
    const route = useRouter();

    const login = async (email: string, password: string) => {
        try {
            let userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userData = userCredential.user;

            // if (!userData.emailVerified) {
            //     toast({
            //         description: "Please verify your email!"
            //     });
            // }

            if (userData) {
                route.push('/dashboard')
            }
            //  else {
            //     toast({
            //         description: "Please Verilfy your email before logging in!"
            //     })
            // }

        } catch (e) {
            console.error(e);
            setError("Error");
        }
    };

    return (
        <AuthForm
            func={login}
            errorMsg={error}
        />
    );
}
