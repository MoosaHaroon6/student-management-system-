"use client"
import { useEffect } from "react";
import Sidebar from "./_components/sideBar";
import { useAuthContext } from "@/context/authContext";

export default function Dashboard() {
    const { user } = useAuthContext()!;

    useEffect(() => {
        if (!user) return;
    }, [user])
    
    return (
        <>
            <Sidebar />
        </>
    );
}