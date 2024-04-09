import React from 'react'
type ButtonProps = {
  text: string,
  color: string,
}

const Button = ({ text, color}: ButtonProps) => {
  return (
    <div className="btn">{text}</div>
  )
}

export default Button