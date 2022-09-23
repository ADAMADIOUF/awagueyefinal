import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import contact from "../../src/images1/contact.png"
import Footer from '../Footer'
import {send} from "emailjs-com"
const Contact = () => {
  const[sender_name,set_sender_name]= useState("")
    const [sender_email, set_sender_email] = useState("")

  const [message, set_message] = useState("")
const handleName = (e) =>{
set_sender_name(e.target.value)
}
const handleEmail = (e) => {
  set_sender_email(e.target.value)
}
const handleMessage = (e) => {
  set_message(e.target.value)
}
const sendEmail = (e) =>{
e.preventDefault()
send(
  '',
  '',
  { sender_name, sender_email, message },
  ''
)
  .then((response) => {
    console.log('message sent successful', response.status, response.text)
  })
  .catch((err) => {
    console.log('fail', err)
  })
  set_sender_name("")
  set_sender_email("")
  set_message("")
}
  const { closeSubmenu } = useGlobalContext()
  return (
    <>
      <div className='contact' onMouseOver={closeSubmenu}>
        <div className='header'>
          <div className='header-contact'>
            <div className='header-contact-details'>
              <h3>contact</h3>
              <div className='header-img-contact'>
                <img src={contact} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='contact-info section-center'>
          <div className='contact-info-title'>
            <h3>
              Contactez nous pour en savoir plus sur nos offres et savoir
              comment on peut vous aider!
            </h3>
          </div>
          <div className='contact-container'>
            <article className='contact-details-1'>
              <h3>contact</h3>
              <h5>telephone:(+221)777081351</h5>
              <h5>telephone:(+221)772774672</h5>
              <h3>emplacements</h3>
              <h5>niarry tally rue 13 x Avenue Bourguiba </h5>
              <h3>heures d'ouverture</h3>
              <h5>Du Lundi au Samedi 10h à 20h</h5>
            </article>
            <article className='form' onSubmit={sendEmail}>
              <form className='form-details'>
                <input
                  type='text'
                  className='input-form'
                  placeholder='nom'
                  name='sender_name'
                  onChange={handleName}
                />
                <input
                  type='email'
                  className='input-form'
                  placeholder='email'
                  name='sender_email'
                  onChange={handleEmail}
                />
                <textarea
                  name='message'
                  id=''
                  cols='30'
                  rows='10'
                  className='input-form'
                  placeholder='message'
                  onChange={handleMessage}
                ></textarea>
                <button className='btn-form input-form'>envoyer</button>
              </form>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact