import React from 'react'
import {Link} from "react-router-dom"

const Button = ({link, children, identify}) => {
  return (
    <div className='links'>
        <a href={link} id={identify} target="_blank" rel="noreferrer">{children}</a>
    </div>
  )
}

const Anchor=()=>{
  return (
    <>
          <Button link={"https://training.zuri.team"} identify="btn__zuri">
        Zuri Team
      </Button>

      <Button link={"https://books.zuri.team"} identify="books">
        Zuri Books
      </Button>

      <Button
        link={"https://books.zuri.team/python-for-beginners?ref_id=owzbi"}
        identify="book__python"
      >
        Python Books
      </Button>

      <Button link={"https://background.zuri.team"} identify="pitch">
        Background Check
      </Button>

      <Button
        link={"https://books.zuri.team/design-rules "}
        identify="book__design"
      >
        Design Books
      </Button>

      <div className="links">
      <Link to={"/contact"} id={"contact"}>Contact Me</Link>
      </div>


    </>
  )
}

export default Anchor