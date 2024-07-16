import {useTransactions} from "@/feature/transactions/model";

export const Transactions = () => {

  const {amount, balance, setRecipient, setAmount, setBalance, recipient, sendTransaction} = useTransactions()

  return (
    <div>
      <header>
        <button onClick={() => window.history.back()}>Назад</button>
        <div>Баланс: {balance} SOL</div>
      </header>
      <main>
        <input
          type="number"
          placeholder="Количество SOL"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Адрес кошелька получателя"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <button onClick={sendTransaction}>Отправить</button>
      </main>
    </div>
  );
}