import { House, School, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
function Sidebar() {
    const menuBar = [
        {
            id: 1,
            title: 'Students',
            icon: Users,
            route: '/dashboard/students'
        },
        {
            id: 2,
            title: 'Class',
            icon: School,
            route: '/dashboard/class'
        },
        {
            id: 3,
            title: 'Home',
            icon: House,
            route: '/home'
        },
        {
            id: 4,
            title: 'Pro',
            icon: ShieldCheck,
            route: '/'
        }
    ];

    return (
        <div className="w-[300px] h-screen border-r-2">
            <div className="flex items-center gap-5 p-4">
                <Image
                    src={'/logo.jpg'}
                    alt='SMS'
                    width={40}
                    height={1}
                    className="h-12"
                />
                <h1 className="text-2xl text-rose-400 font-bold">Free Tutors</h1>
            </div>
            <div className="pt-5">
                <ul className="flex flex-col ">
                    {
                        menuBar.map((menu) => (
                            <Link href={menu.route} key={menu.id + menu.title}>
                                <li className="flex gap-5 items-center text-gray-500 font-medium p-5
                                    cursor-pointer rounded-md hover:text-rose-600 hover:bg-rose-200
                                    justify-between text-md
                                ">{menu.title} <menu.icon /></li>
                            </Link>

                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;