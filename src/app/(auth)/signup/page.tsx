"use client";

import AuthForm from "@/components/authForm";
import { auth, db } from "@/firebase/firebaseConfig";
import { toast } from "@/hooks/use-toast";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SignUp() {
    const [error, setError] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false); // Track signup completion

    const route = useRouter(); // router

    const resetErrorAfterTimeout = (msg: string) => {
        setError(msg);
        setTimeout(() => setError(''), 3000);
    };



    const signUp = async (email: string, password: string, role?: string) => {
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;

            // await sendEmailVerification(user);

            // resetErrorAfterTimeout("Verification email sent! Please check your inbox.");

            if (!role) {
                toast({
                    description: "Please select your role!"
                })
            }
            saveUserToFirebase(email, password, role || '', user.uid);
            route.push('/dashboard')

            setIsSignedUp(true);
        } catch (err: any) {
            if (err.code === "auth/email-already-in-use") {
                resetErrorAfterTimeout("This email is already in use. Please use a different email.");
            } else if (err.code === "auth/weak-password") {
                resetErrorAfterTimeout("Password is too weak. Please choose a stronger password.");
            } else {
                resetErrorAfterTimeout("Something went wrong. Please try again.");
            }
        }
    };

    const saveUserToFirebase = async (email: string, password: string, role: string, uid: string) => {
        const user = { email, password, uid, role };
        const docRef = doc(db, "users", uid);

        await setDoc(docRef, user);
    };

    useEffect(() => {
        if (isSignedUp) {
            route.push('/dashboard');
        }
    }, [isSignedUp, route]); // Triggers the navigation after state update

    return (
        <AuthForm
            func={signUp}
            signup={true}
            errorMsg={error}
        />
    );
}
