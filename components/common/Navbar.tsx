import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="navbar | flex justify-between items-center px-5 py-4 max-w-[1224px] w-full mx-auto ">
      <Logo />
      <Image
        src={"/navbar/hamburger.svg"}
        className="md:hidden"
        alt="Yangseed Logo"
        width={32}
        height={32}
      />
      <div className="navOptions | hidden md:flex items-center gap-8">
        <Link href="/community">Community</Link>
        <Link href="/store">Store</Link>
      </div>
      <div className="navOptions | hidden md:flex items-center gap-6">
        <Link href="/store">Store</Link>
        <Button className="h-max py-3 px-7 rounded-full">
          Become a Member
        </Button>
      </div>
    </div>
  );
}
