'use client'
import s from './transactions.module.scss'
import {useTransactions} from "@/feature/transactions/model";
import {Header} from "@/widgets";
import {useRouter} from "next/router";
import {Button, TextField} from "@/shared";

export const Transactions = () => {
  const router = useRouter()
  const {
    amount,
    balance,
    recipientChangeHandler,
    recipient,
    sendTransaction,
    amountChangeHandler,
    recipientError,
    amountError,
    globalError
  } = useTransactions()
  return (
    <>
      <Header
        text={`Баланс: ${balance} SOL`}
        actionCallback={() => router.back()}
        actionText={'Назад'}
      />
      <main className={'wrapper'}>
        <h1 className={'sr-only'}>Транзакции</h1>
        <div className={'container'}>
          <form className={s.form} action="#">
            <TextField
              label={'Сколько SOL вы хотите отправить?'}
              type="number"
              placeholder="Количество SOL"
              value={amount}
              onChange={amountChangeHandler}
              errorMessage={amountError}
            />
            <TextField
              type="text"
              label={'На какой кошелек отправить?'}
              placeholder="Адрес кошелька получателя"
              value={recipient}
              onChange={recipientChangeHandler}
              errorMessage={recipientError}
            />
            {globalError && <p className={'error'}>{globalError}</p> }
            <Button type={'submit'} onClick={sendTransaction} disabled={(!recipient && !amount) || amountError || recipientError }>
              Отправить
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}