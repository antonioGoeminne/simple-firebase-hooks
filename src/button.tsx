/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from 'react'

const button = ({ children, ...props }: any) => {
  return <button {...props}>{children}</button>
}

export const Button = memo(button)
