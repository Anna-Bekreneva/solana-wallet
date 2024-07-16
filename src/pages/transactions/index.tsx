import { useState } from 'react';
import { Connection, PublicKey, clusterApiUrl, Keypair, Transaction, SystemProgram } from '@solana/web3.js';
import {Transactions} from "@/feature";

const TransactionsPage = () => {
  return (
    <Transactions/>
  )
}

export default TransactionsPage
