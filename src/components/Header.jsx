import React from 'react'
import memeimg from '../assets/meme.jpg'

export default function Header() {
  return (
    <header className='header'>
        <img src={memeimg} alt='meme logo' className='memeimg' />
      <h1>Meme Generator</h1>
    </header>
  )
}
