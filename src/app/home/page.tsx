"use client"
import React from 'react'
import Image from "next/image";
import CardPost from "@/components/CardPosts/Index"
import LogoIcon from '@/img/bx-code-alt.svg'
import Profile from '@/img/my-photo.jpeg'
import IconAddPhoto from '@/img/icon-add-photo.svg'
import IconAddVideo from '@/img/icon-add-video.svg'

const page = () => {
  
  return (
    <>
      <header className="header">
        <nav className="header_nav-bar container">
          <h1>Code Help-BR <Image src={LogoIcon} alt="logo icon" /></h1>
          <ul className="header_list-link">
            <li className="header_list-link-btn">
              <button>Logout</button>
            </li>
            <li className="header_list-link-prifile">
              {/* <Image src={} alt='' width={40} height={40} style={{ borderRadius: "50%" }} /> */}
            </li>
          </ul>
        </nav>
      </header>
      <main className="container_main container">
        <section className="content_grid-one">

          <article className="card_profile">
            <div className="card_profile-background" />
            <div className="card_profile-content">
              <div className="card_profiile-img">
                <Image src={Profile} alt="" />
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
                <Image src={Profile} alt="" />
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

export default page