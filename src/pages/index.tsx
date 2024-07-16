import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/wallet">Кошелёк</Link>
      <Link href="/transactions">Транзакции</Link>
    </div>
  );
}
