import Image from 'next/image'
import Link from 'next/link';
export default function Hero() {
    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-4xl">
                        Create Your Own School!
                        <strong className="font-extrabold text-rose-600 sm:block">Learn and Earn!</strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        This is all in one platform where you can easily manage your school portal,by just creating an account.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            href={'/signup'}
                        >
                            Get Started
                        </Link>

                        <Link
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-rose-500 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
            <Image
                src={'/heroImg.jpg'}
                alt='Main'
                width={8000}
                height={900}
            />
        </section>
    );
}
