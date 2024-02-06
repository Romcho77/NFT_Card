import React from 'react'
import Top from "./../cardTop/Top"
import Bot from "./../cardBot/Bot"

export default function Card() {
  return (
    <div className='card w-[360px] bg-[#15273F]  rounded-2xl'>
        <Top/>
        <Bot/>
    </div>
  )
}
