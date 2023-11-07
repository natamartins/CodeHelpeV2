import React from 'react'
import Image from 'next/image'
import Photo from '@/img/my-photo.jpeg'
import IconLogo from '@/img/bx-code-alt.svg'

const Index = () => {
    return (
        <article className='card_all-posts'>
            <div className='card_info-post'>
                <div>
                    <Image src={Photo} alt='' />
                    <span className='card_more-info'>
                        <h3>Natã Martins</h3>
                        <p>12/09/2023 - 45m</p>
                    </span>
                </div>
                <Image src={IconLogo} alt='' />
            </div>
            <span className='photo_post'>
                <Image src={Photo} alt='' />
            </span>
            <div>
                <span>
                    <p>three  icon</p>
                </span>
                <span>
                    <p>one icon</p>
                </span>
            </div>
        </article>
    )
}

export default Index