"use client"
import React, { useState } from 'react'
import { signOut, useSession } from "next-auth/react"
import Image from "next/image";
import CardPost from "@/components/CardPosts/Index"
import LogoIcon from '@/img/bx-code-alt.svg'
import Profile from '@/img/my-photo.jpeg'
import IconAddPhoto from '@/img/icon-add-photo.svg'
import IconAddVideo from '@/img/icon-add-video.svg'

// interface TypeSession {
//     session: {
//         user?: {
//             name: string,
//             email: string,
//             image?: string
//         }
//     }
// }

const Home = () => {
    const { data: session }: any = useSession()
    const [closed, setClosed] = useState(false)

    if (session === null) {
        window.location.href = "/"
    }

    return (
        <>
            <header className="header">
                <nav className="header_nav-bar container">
                    <h1>Code Help-BR <Image src={LogoIcon} alt="logo icon" /></h1>
                    <button className='btn_signOut' onClick={() => setClosed(!false)}>
                        <Image src={session?.user?.image} alt='' width={30} height={30} style={{ borderRadius: "50%" }} />
                        <p>{session?.user?.name}</p>
                    </button>
                    {
                        closed ? (
                            <button className='box_signOut' onClick={() => signOut()}>Sair de {session?.user.name} <span /></button>
                        ) : ""
                    }
                </nav>
            </header>
            <main className="container_main container">
                <section className="content_grid-one">
                    <article className="card_profile">
                        <div className="card_profile-background" />
                        <div className="card_profile-content">
                            <div className="card_profiile-img">
                                <Image src={session?.user?.image} alt="" width={100} height={100} />
                                <p>Software Developer</p>
                                <p>Há mais de 2 anos neste mundo de TI!</p>
                            </div>
                            <ul className="card_profile-list-skills">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                    </article>

                    <article className="card_notification">
                        <p>notification</p>
                        <p>message</p>
                    </article>

                    <button className="content_grid-one-btn-create">Create Post</button>

                </section>

                <section className="content_grid-two">

                    <article className="content_create-post">
                        <div className="card_create-post">
                            <div>
                                <Image src={session?.user?.image} alt="" width={100} height={100} />
                                <input type="text" placeholder="escreva aqui" />
                            </div>
                            <button>Post</button>
                        </div>

                        <div className="card_add-photo-video">
                            <button>
                                <Image src={IconAddPhoto} alt="" />
                                <p>photo</p>
                            </button>
                            <button>
                                <Image src={IconAddVideo} alt="" />
                                <p>video</p>
                            </button>
                        </div>
                    </article>

                    <article className="content_post">
                        <CardPost />
                    </article>

                </section>
            </main>
            <footer>
            </footer>
        </>
    )
}

export default Home