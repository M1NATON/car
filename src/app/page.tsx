import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h1><Link href={'/catalog'}>Каталог</Link></h1>
    </div>
  );
}
