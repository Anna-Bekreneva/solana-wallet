import {useWallet} from "@/pages/wallet/model";

export const Wallet = () => {

  const {wallet, balance, createWallet} = useWallet()

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