import {useState} from "react";
import {clusterApiUrl, Connection, Keypair, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";

export const useTransactions = () => {
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

  return {amount, balance, setRecipient, setAmount, setBalance, recipient, sendTransaction}
}