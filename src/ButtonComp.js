import React from 'react'

const Button = ({link, children, identify}) => {
  return (
    <div className='links'>
        <a href={link} id={identify} target="_blank" rel="noreferrer">{children}</a>
    </div>
  )
}

export default Button