import React from 'react'
import Image from 'next/image'
import Photo from '@/img/my-photo.jpeg'
import IconLogo from '@/img/bx-code-alt.svg'
import { BookMarked, Bookmark, Heart, ThumbsDown, ThumbsUp } from 'lucide-react'

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
            <div className='links_post'>
                <ul>
                    <li>
                        <button>
                            <Heart size={20} />
                        </button>
                    </li>
                    <li>
                        <button>
                            <ThumbsUp size={20} />
                        </button>
                    </li>
                    <li>
                        <button>
                            <ThumbsDown size={20} />
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