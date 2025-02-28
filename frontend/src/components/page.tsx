import Button from "./Button";

export default function Page() {
    return (
            <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#0D0D0D] to-[#001E1E]">
                <div className="text-center">
                    <div className="text-6xl text-white"><h1>The Bruhs</h1></div>
                    <div className="text-white/50 italic">"Bitches come and Go... Bruh</div>
                    <div className="text-white/50 italic">But you know we stay"   -The Bruhs</div>
                    <div className="w-full m-2 flex justify-center space-x-4">
                        <Button>Hello</Button>
                        <Button>Bruh</Button>
                    </div>
                </div>
            </div>
    )
}