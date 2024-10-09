import React from 'react'
import './Header.css'

export default function Header(){
    return (
      <header>
        <img src="/logo.png" alt=""/>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
      </header>
    )
  }
  