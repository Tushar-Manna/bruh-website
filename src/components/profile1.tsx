import Link from "next/link";

export default function Profile() {
    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
            
            <img
                src="/himanshu.jpg" 
                alt="Profile Picture"
                className="w-32 h-32 rounded-full border-4 border-primary mb-4"
            />
          
            <div className="flex flex-col items-center space-y-2">
                <Link href="/about" className="text-primary hover:underline">
                    About Me
                </Link>
                <Link href="/projects" className="text-primary hover:underline">
                    Projects
                </Link>
                <Link href="/contact" className="text-primary hover:underline">
                    Contact
                </Link>
            </div>
        </div>
    );
}