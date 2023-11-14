"use client"
import React, { useState } from 'react'
import { signOut, useSession } from "next-auth/react"
import Image from "next/image";
import { Bell, HomeIcon, Mail, Search, Smartphone, User2 } from 'lucide-react';
import CardPost from "@/components/CardPosts/Index"
import CardRequest from '@/components/CardRequest/Index'
import CardNotification from '@/components/CardNotification/Index'
import NewMessage from '@/components/CardNewMessage/Index'
import LogoIcon from '@/img/bx-code-alt.svg'
import IconAddPhoto from '@/img/icon-add-photo.svg'
import IconAddVideo from '@/img/icon-add-video.svg'

const Home = () => {
    const { data: session }: any = useSession()
    const [closed, setClosed] = useState(false)
    const [openNotification, setOpenNotification] = useState(false)
    const [resquest, setRequest] = useState(10)

    if (session === null) {
        window.location.href = "/"
    }

    return (
        <>
            <header className="header">
                <nav className="header_nav-bar container">
                    <h1> Code Help-BR <Image src={LogoIcon} alt="logo icon" /></h1>
                    <button className='btn_signOut' onClick={() => setClosed(!false)}>
                        <Image src={session?.user?.image} alt='' width={30} height={30} style={{ borderRadius: "50%" }} />
                        <p>{session?.user?.name}</p>
                    </button>
                    {
                        closed ? (
                            <button className='box_signOut' onClick={() => signOut()}>Sair de {session?.user.name} <span /></button>
                        ) : null
                    }
                </nav>
                <div className='navbar_mobile'>
                    <button onClick={() => window.location.href = "/home"}><HomeIcon size={20} /></button>
                    <button><Bell size={20} /></button>
                    <button><Mail size={20} /></button>
                    <button><User2 size={20} /></button>
                </div>
            </header>

            <main className="container_main container">

                <section className="content_grid-one">

                    <div className='container_person'>

                        <article className="card_profile">

                            <div className="card_profile-background" />

                            <div className="card_profile-content">
                                <div className="card_profiile-img">
                                    <Image src={session?.user?.image} alt="" width={100} height={100} />
                                    <p>Software Developer</p>
                                    <p>Há mais de 2 anos neste mundo de TI!</p>
                                </div>
                            </div>
                        </article>

                        <article className="card_notification">
                            <button onClick={() => setOpenNotification(!false)}>
                                <span>+5</span>
                                <Bell size={20} />
                                notification
                            </button>
                            {
                                openNotification ? (
                                    <span className='conatiner_notificaion'>
                                        <span />
                                        <CardNotification
                                            image={session?.user?.image}
                                            name={session?.user?.name}
                                            message='Aceitou sua solicitação'
                                            data={4}
                                        />
                                        <CardNotification
                                            image={session?.user?.image}
                                            name={session?.user?.name}
                                            message='Aceitou sua solicitação'
                                            data={4}
                                        />
                                        <CardNotification
                                            image={session?.user?.image}
                                            name={session?.user?.name}
                                            message='Aceitou sua solicitação'
                                            data={4}
                                        />
                                        <CardNotification
                                            image={session?.user?.image}
                                            name={session?.user?.name}
                                            message='Aceitou sua solicitação'
                                            data={4}
                                        />
                                        <CardNotification
                                            image={session?.user?.image}
                                            name={session?.user?.name}
                                            message='Aceitou sua solicitação'
                                            data={4}
                                        />
                                    </span>
                                ) : ''
                            }
                            <button>
                                <span>+3</span>
                                <Mail size={20} />
                                message
                            </button>

                        </article>

                        <button className="content_grid-one-btn-create">Create Post</button>

                    </div>

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
                        <CardPost />
                        <CardPost />
                    </article>

                </section>

                <section className='container_messages'>

                    <article className='card_messsages'>

                        <div className='message_icon'>
                            <h3>Messages</h3>
                            <Smartphone />
                        </div>

                        <span className='search_message'>
                            <Search />
                            <input type="text" placeholder='pesquisar mensagem' />
                        </span>

                        <div className='card_navgation-messages'>

                            <ul>
                                <li>Primary</li>
                                <li>Geral</li>
                                <li>Request({resquest})</li>
                            </ul>

                            <div className='box_messages'>
                                <NewMessage
                                    image={session?.user?.image}
                                    name='Naythan'
                                    notification={3}
                                />
                                <NewMessage
                                    image={session?.user?.image}
                                    name='Naythan'
                                    notification={3}
                                />
                                <NewMessage
                                    image={session?.user?.image}
                                    name='Naythan'
                                    notification={3}
                                />
                            </div>
                        </div>

                    </article>

                    <article className='container_request'>

                        <h3>Request</h3>

                        <div className='card_request'>
                            <CardRequest
                                image={session?.user?.image}
                                name='React.JS'
                                friends={3}
                            />
                            <CardRequest
                                image={session?.user?.image}
                                name='React.JS'
                                friends={3}
                            />
                            <CardRequest
                                image={session?.user?.image}
                                name='React.JS'
                                friends={3}
                            />
                        </div>

                    </article>

                </section>

            </main>
        </>
    )
}

export default Home