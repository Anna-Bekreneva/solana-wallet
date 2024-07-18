'use client'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { HeadMeta } from '@/shared'

type Props = {
  children: ReactNode
  description?: string
  favicon?: string
  maxWidth?: string
  title?: string
} & ComponentPropsWithoutRef<'div'>

export const PageWrapper = ({
  children,
  description,
  favicon,
  maxWidth,
  title,
  ...rest
}: Props) => {
  return (
    <div { ...rest}>
      <HeadMeta description={description} favicon={favicon} title={title}/>
      {children}
    </div>
  )
}
