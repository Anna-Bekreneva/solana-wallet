import Link from "next/link";
import {APP_ROUTES} from "@/shared";

export default function Home() {
  return (
    <div>
      <Link href={APP_ROUTES.wallet}>Кошелёк</Link>
      <Link href={APP_ROUTES.transactions}>Транзакции</Link>
    </div>
  );
}
