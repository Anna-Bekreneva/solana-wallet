'use client'

import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  memo,
} from 'react'

import s from './button.module.scss'
import clsx from "clsx";

type Props<T extends ElementType> = {
  as?: T
  variant?: 'light' | 'dark'
}

export const ButtonPolymorph = <T extends ElementType = 'button'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>,
  ref: ElementRef<T>
) => {
  const {
    as: Tag = 'button',
    children,
    className,
    variant = 'dark',
    ...rest
  } = props

  return (
    // @ts-expect-error TS2322
    <Tag className={clsx(s.button, s[String(variant)], className)} ref={ref} {...rest}>
      <span>{children}</span>
    </Tag>
  )
}

export const Button = memo(
  forwardRef(ButtonPolymorph) as <T extends ElementType = 'button'>(
    props: Props<T> &
      Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & {
        ref?: ForwardedRef<ElementRef<T>>
      }
  ) => ReturnType<typeof ButtonPolymorph>
)
