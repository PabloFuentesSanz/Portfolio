import React from 'react'
import './style.css'
function Contact() {
  return (
    <footer id="contacto">
        <div className="contenedor">
            <h2 className="titulo">Contact Me</h2>
            <form action="" className="form">
                <input className="input"  type="text" name="" id="" placeholder="Nombre"/>
                <input className="input"  type="email" name="" id="" placeholder="Email"/>
                <textarea  className="input" name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <input className="input"  type="submit" value="Enviar"/>
            </form>
        </div>
    </footer>
  )
}

export default Contact