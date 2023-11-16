import React, { useState } from 'react'
import Image from 'next/image'
import Photo from '@/img/my-photo.jpeg'
import IconLogo from '@/img/bx-code-alt.svg'
import { Bookmark, Heart, ThumbsDown, ThumbsUp } from 'lucide-react'

const Index = () => {
    const [heart, setHeart] = useState(0)
    const [like, setLike] = useState(0)
    const [disLike, setDisLike] = useState(0)

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
            <div className='links_post'>
                <ul>
                    <li>
                        <button onClick={() => setHeart(heart + 1)}>
                            <Heart size={20} />
                            <span>{heart}</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setLike(like + 1)}>
                            <ThumbsUp size={20} />
                            <span>{like}</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setDisLike(disLike + 1)}>
                            <ThumbsDown size={20} />
                            <span>{disLike}</span>
                        </button>
                    </li>
                </ul>
                <button>
                    <Bookmark size={20} />
                </button>
            </div>
            <div className='box_comments'>
                <button>Comentarios</button>
            </div>
        </article>
    )
}

export default Index