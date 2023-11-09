import Image from 'next/image'
import React from 'react'

interface TypeMessage {
  image: string,
  name: string,
  notification: number,
  // describer: string,
}

const Index = ({ image, name, notification }: TypeMessage) => {
  return (
    <div className='card_new-message'>
      <Image src={image} alt='' width={40} height={40} />
      <div className='info_message'>
        <h4>{name}</h4>
        <p>{notification} new messages</p>
      </div>
    </div>
  )
}

export default Index