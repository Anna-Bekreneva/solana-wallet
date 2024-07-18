'use client'

import {useWallet} from "./model";
import s from './wallet.module.scss'
import {Header} from "@/widgets";
export const Wallet = () => {

  const {wallet, balance, createWallet} = useWallet()

  return (
      <>
        <Header
          text={`Баланс: ${balance} SOL`}
          actionCallback={createWallet}
          actionText={'Создать кошелёк'}
        />
        <main className={'wrapper'}>
          <h1 className={'sr-only'}>Кошелек</h1>
          {wallet && (
            <div className={'container'}>
              <div className={s.item}>Адрес кошелька:
                <span> {wallet.publicKey.toString()}</span>
              </div>
              <div className={s.item}>Private Key:
              <span> {wallet.secretKey.toString()}</span></div>
            </div>
          )}
        </main>
      </>
  );
}