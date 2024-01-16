import { ReactNode } from 'react'

interface IBox {
    children: ReactNode;
}

export const Box = ({ children } : IBox) => {
  const isContent = children ? 'boxContent' : null

  return (
    <div className={`box ${isContent}`}>
      {children === 0 ? null : children}
    </div>
  )
}
