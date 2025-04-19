import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="w-full h-[60px] border-b-[2.5px] border-primaryDark drop-shadow-2xl flex items-center justify-between px-6 bg-primary text-white fixed z-50">
            <Link className="text-2xl flex items-center" style={{ height: "inherit" }} href="/">
                <img src="/22.png" alt="" style={{ height: "inherit" }} />
            </Link>
            <div className="flex space-x-6">
                <Link href="/articles">Articles</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    );
}