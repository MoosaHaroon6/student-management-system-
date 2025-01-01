"use client"
import { useRouter } from "next/navigation"

export default function StudentNavbar() {
    const route = useRouter();
    return (
        <div className="w-full h-16 border border-b-2 p-3 flex items-center justify-between">
            <div className="rounded-full bg-slate-300 w-16 h-12 text-white">
                <p>Profile</p>
            </div>
            <div className="flex w-[250px] justify-between gap-3">
                <button
                    onClick={() => route.push("/dashboard/students/addStudent")}
                    className="bg-rose-100 rounded-lg w-full h-10  text-rose-900 hover:bg-rose-300 text-sm">
                    Add student
                </button>
                <button
                    className="bg-rose-100 rounded-lg w-full h-10 text-rose-900  hover:bg-rose-300 text-sm">
                    Logout
                </button>
            </div>
        </div>
    )
}