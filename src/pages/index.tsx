'use client'

import Link from "next/link";
import {APP_ROUTES} from "@/shared";
import s from './index.module.scss'
import {PageWrapper} from "@/widgets";

export default function Home() {
  return (
    <PageWrapper>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li>
            <Link className={s.link} href={APP_ROUTES.wallet}>Кошелёк</Link>
          </li>
          <li>
            <Link className={s.link} href={APP_ROUTES.transactions}>Транзакции</Link>
          </li>
        </ul>
      </nav>
    </PageWrapper>
  );
}
