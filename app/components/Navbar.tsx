import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="flex items-center ">
          <Image
            src="/campusLink-logo.png"
            alt="CampusLink Logo"
            width={140} // adjust size as needed
            height={40}
            priority
          />
        </Link>

        {/* Logout button */}
        <button className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] rounded-lg px-4 py-2 transition-colors">
          Logout
        </button>
      </div>
    </nav>
  );
}
