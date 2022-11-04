import React from 'react'

const Contact = () => {
  return (
    <div className='form-container'>
        <div id='heading'>
            <h3>
                Contact Me
            </h3>

            <p>
                Hi there, contact me and drop me a message 
            </p>
        </div>
        <form>
         <div className='names-input'>
         <div className='text-input'>
                <label htmlFor="firstname">Firstname: </label>
                <input type="text" name='firstname' placeholder='enter your firstname' id='first_name'  required/>
            </div>

            <div className='text-input'>
            <label htmlFor="Lastname">Lastname: </label>
                <input type="text" name='Lastname' placeholder='enter your lastname' id='last_name'  required/>
            </div>
         </div>

      <div className='email-msg'>
      <div className='text-input'>
            <label htmlFor="email">Email:</label>

                <input type="email" placeholder='example@email.com' id='email' required/>
            </div>

            <div className='text-input'>
            <label htmlFor="message">Message:</label>

                <textarea name="" id="message" cols="70" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>
            </div>
      </div>

            
            <div className='agree'>
               <input type="checkbox" name='agree' required/>
               <label htmlFor="agree"> You agree to providing your data to owzbi who may contact you.</label>
            </div>
               <button type="submit" id='btn__submit'>Send Mail</button>
        </form>
    </div>
  )
}

export default Contact