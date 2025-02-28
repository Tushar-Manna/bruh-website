import HyLink from "./HyLink";

export default function Navbar() {
    return(
        <div className="w-full h-[80px] border-b-[2.5px] border-[#348888] drop-shadow-[0_5px_15px_#22BABB82] flex items-center justify-between px-6 bg-black text-white rounded-br-[20px] rounded-bl-[20px] fixed">
            <HyLink className="text-4xl" href="/" >Bruh!</HyLink>
            <div className="flex space-x-6">
                <HyLink href="/news">Articles</HyLink>
                <HyLink href="/about">Us Bruh</HyLink>
                <HyLink href="/contact">Contact</HyLink>
            </div>
        </div>
    )
}