import Image from 'next/image'
import React from 'react'

interface TypeNotification {
    image: string,
    name: string,
    message: string,
    data: number
}

const Index = ({ image, name, message, data }: TypeNotification) => {
    return (
        <div className='card_notification-span'>
            <Image src={image} alt='' width={30} height={30} />
            <div className='box_info-notification'>
                <div>
                    <h6>{name}</h6>
                    <p>{message}</p>
                </div>
                <p>{data} W</p>
            </div>
        </div>
    )
}

export default Index