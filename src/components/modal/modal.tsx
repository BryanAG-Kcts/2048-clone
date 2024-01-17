import { ReactNode } from 'react'
import './modal.css'

interface IModal {
    children: ReactNode;
}

export const Modal = ({ children } : IModal) => {
  return (
    <dialog id='modal' open>
      {
        children
      }
    </dialog>
  )
}
