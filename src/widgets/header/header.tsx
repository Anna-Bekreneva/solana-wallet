'use client'

import clsx from "clsx";
import s from './header.module.scss'
import {Button} from "@/shared";

type Props = {
  actionText: string
  actionCallback: () => void
  text: string
}
export const Header = ({actionCallback, actionText, text}: Props) => {
  return (
    <header className={s.header}>
      <div className={clsx('container', s.container)}>
        <Button variant={'light'} onClick={actionCallback} type={'button'}>
          {actionText}
        </Button>
        <span>{text}</span>
      </div>
    </header>
  )
}