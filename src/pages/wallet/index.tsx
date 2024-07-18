'use client'

import {Wallet} from "@/feature";
import {PageWrapper} from "@/widgets";

export const WalletPage = () => {
  return (
    <PageWrapper title={'Кошелек'} description={'Ваш кошелек'}>
      <Wallet/>
    </PageWrapper>
  )
}

export default WalletPage