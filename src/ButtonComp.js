import React from 'react'

const Button = ({link, children, identify}) => {
  return (
    <div>
        <a href={link} id={identify}>{children}</a>
    </div>
  )
}

export default Button