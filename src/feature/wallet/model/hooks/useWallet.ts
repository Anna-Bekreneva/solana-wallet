import {useState} from "react";
import {clusterApiUrl, Connection, Keypair, PublicKey} from "@solana/web3.js";

export const useWallet = () => {
  const [wallet, setWallet] = useState<Keypair | null>(null);
  const [balance, setBalance] = useState(0);

  const createWallet = async () => {
    const newWallet = Keypair.generate();
    setWallet(newWallet);

    const connection = new Connection(clusterApiUrl('devnet'));
    const balance = await connection.getBalance(new PublicKey(newWallet.publicKey));
    setBalance(balance / 1e9); // Convert lamports to SOL
  };

  return { wallet, balance, createWallet }
}