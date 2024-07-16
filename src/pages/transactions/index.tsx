import { useState } from 'react';
import { Connection, PublicKey, clusterApiUrl, Keypair, Transaction, SystemProgram } from '@solana/web3.js';

export default function Transactions() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [balance, setBalance] = useState(0);

  const sendTransaction = async () => {
    const connection = new Connection(clusterApiUrl('devnet'));
    const fromWallet = Keypair.generate(); // Replace with your wallet
    const toWallet = new PublicKey(recipient);

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: fromWallet.publicKey,
        toPubkey: toWallet,
        lamports: amount * 1e9, // Convert SOL to lamports
      })
    );

    const signature = await connection.sendTransaction(transaction, [fromWallet]);
    await connection.confirmTransaction(signature);

    const balance = await connection.getBalance(fromWallet.publicKey);
    setBalance(balance / 1e9); // Convert lamports to SOL
  };

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
