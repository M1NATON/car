import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h1><Link href={'/catalog'}>Каталог</Link></h1>
        <h1><Link href={'/frequently-asked-questions'}>Вопросы</Link></h1>
    </div>
  );
}
