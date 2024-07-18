'use client'
import {ChangeEvent, useState} from "react";
import {clusterApiUrl, Connection, Keypair, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";

export const useTransactions = () => {
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState('')
  const [recipient, setRecipient] = useState('');
  const [recipientError, setRecipientError] = useState('')
  const [balance, setBalance] = useState(0);
  const [globalError, setGlobalError] = useState('')

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setAmount(value)
    if (Number(amount) < 1) {
      setAmountError('Введите корректную сумму')
    } else {
      amountError && setAmountError('')
    }
  }

  const recipientChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setRecipient(event.target.value)

  const sendTransaction = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const connection = new Connection(clusterApiUrl('devnet'));
      const fromWallet = Keypair.generate();
      const toWallet = new PublicKey(recipient);

      const senderBalance = await connection.getBalance(fromWallet.publicKey);
      const lamportsToSend = Number(amount) * 1e9;

      if (senderBalance < lamportsToSend) {
        setGlobalError('Недостаточного баланса')
        return;
      }

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: fromWallet.publicKey,
          toPubkey: toWallet,
          lamports: lamportsToSend,
        })
      );

      const signature = await connection.sendTransaction(transaction, [fromWallet]);
      await connection.confirmTransaction(signature);

      const updatedBalance = await connection.getBalance(fromWallet.publicKey);
      setBalance(updatedBalance / 1e9);

      setGlobalError('')

    } catch (error) {
      console.error('Transaction error:', error);
      setGlobalError('Произошла ошибка')
    }
  };


  return {
    amount,
    balance,
    setRecipient,
    setAmount,
    recipient,
    sendTransaction,
    amountChangeHandler,
    amountError,
    recipientChangeHandler,
    recipientError,
    globalError
  }
}