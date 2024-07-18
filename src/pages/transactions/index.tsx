'use client'

import {Transactions} from "@/feature";
import {PageWrapper} from "@/widgets";

const TransactionsPage = () => {
  return (
    <PageWrapper title={'Транзакция'} description={'Страница для перевода на другой кошелек'}>
      <Transactions/>
    </PageWrapper>
  )
}
export default TransactionsPage
