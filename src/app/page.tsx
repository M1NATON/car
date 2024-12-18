import Link from "next/link";
import Navbar from "@/app/components/navbar/Navbar";

export default function Home() {
  return (
    <div>
        <h1><Link href={'/catalog'}>Каталог</Link></h1>
    </div>
  );
}
