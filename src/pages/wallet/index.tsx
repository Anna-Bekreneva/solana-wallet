import { useState } from 'react';
import { Connection, PublicKey, clusterApiUrl, Keypair } from '@solana/web3.js';

export default function Wallet() {
  const [wallet, setWallet] = useState(null);
  const [balance, setBalance] = useState(0);

  const createWallet = async () => {
    const newWallet = Keypair.generate();
    setWallet(newWallet);

    const connection = new Connection(clusterApiUrl('devnet'));
    const balance = await connection.getBalance(new PublicKey(newWallet.publicKey));
    setBalance(balance / 1e9); // Convert lamports to SOL
  };

  return (
    <div>
      <header>
        <button onClick={createWallet}>Создать кошелёк</button>
        <div>Баланс: {balance} SOL</div>
      </header>
      <main>
        {wallet && (
          <>
            <div>Адрес кошелька: {wallet.publicKey.toString()}</div>
            <div>Private Key: {wallet.secretKey.toString()}</div>
          </>
        )}
      </main>
    </div>
  );
}
