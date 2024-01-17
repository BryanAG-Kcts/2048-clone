import { ReactNode } from 'react'

interface IBox {
    children: ReactNode;
}

export const Box = ({ children } : IBox) => {
  const isContent = children ? 'boxContent' : null
  const colorBg = 'tile' + children

  return (
    <div className={`box ${isContent} ${colorBg}`}>
      {children === 0 ? null : children}
    </div>
  )
}
