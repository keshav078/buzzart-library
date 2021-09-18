import React from 'react'

type InputProps = {
  disabled?: boolean
  label?: string
  id?: string
  inputClass?: string
  onClick: (e?: any) => void
}

export const BzButton = ({
  label = '',
  onClick,
  disabled = false,
  id = '',
  inputClass = 'btn btn-primary'
}: InputProps) => (
  <button className={inputClass} disabled={disabled} onClick={onClick} id={id}>
    {label}
  </button>
)
