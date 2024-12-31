'use client'
import { useAuthContext } from "@/context/authContext"
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const { user } = useAuthContext()!;
    const router = useRouter();

    return (
        <div className="h-20 border-b-2 flex items-center justify-between p-5">
            <div className="w-20 h-16 border rounded-full shadow-sm">
                <Image
                    src={'/logo.jpg'}
                    alt="SMS"
                    width={100}
                    height={10}
                    className="h-16 "
                />
            </div>
            <div>
                {user ?
                    (<button>Dashboard</button>) :
                    (<button onClick={() => router.push('/signup')}
                        className="bg-rose-600 w-[140px] h-12 text-white rounded-md text-md hover:bg-rose-700 text-wrap"
                    >Create Account</button>)
                }
            </div>
        </div>
    )
}