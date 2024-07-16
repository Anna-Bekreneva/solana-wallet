# Solana Wallet

## Установка и запуск

1. Клонируйте репозиторий:
    ```bash
    git clone <URL вашего репозитория>
    cd my-solana-wallet
    ```

2. Установите зависимости:
    ```bash
    npm install
    ```

3. Запустите локальный сервер:
    ```bash
    npm run dev
    ```

## Пополнение кошелька через CLI

1. Установите Solana CLI:
    ```bash
    sh -c "$(curl -sSfL https://release.solana.com/v1.8.0/install)"
    ```

2. Создайте новый кошелёк:
    ```bash
    solana-keygen new --outfile ~/my-solana-wallet.json
    ```

3. Пополните кошелёк:
    ```bash
    solana airdrop 1 <Ваш публичный ключ>
    ```

## Подтверждение транзакции

1. Отправьте транзакцию:
    ```bash
    solana transfer <Адрес получателя> 0.1 --from ~/my-solana-wallet.json
    ```

2. Подтвердите транзакцию:
    ```bash
    solana confirm <Signature>
    ```