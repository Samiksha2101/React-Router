import React from 'react'

function ContactForm() {
  return (
    <div>
        <form>
        <input type='text' placeholder='Name'/>
        <br/>
        <input type='text'placeholder='Email'/>
        <br/>
        <textarea placeholder='message'/>
        <br/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm