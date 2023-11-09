import Image from 'next/image'
import React from 'react'

interface TypeRequest {
    image: string,
    name: string,
    friends: number,
}

const Index = ({ image, name, friends }: TypeRequest) => {
    return (
        <div className='box_request'>
            <div className='request_info'>
                <Image src={image} alt='' width={40} height={40} />
                <span>
                    <h5>{name}</h5>
                    <p>{friends} amigos em comum</p>
                </span>
            </div>
            <div className='button_request'>
                <button>Aceitar</button>
                <button>Rejeitar</button>
            </div>
        </div>
    )
}

export default Index