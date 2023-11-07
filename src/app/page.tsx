"use client"
import Image from "next/image"
import IconLogin from '@/img/icon_login.svg'
import IocnGoogle from '@/img/google.png'

import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if (session?.user) {
    window.location.href = '/home'
    console.log("Ola, chegou aqui!!")
  }

  return (
    <section className="container_login">
      <div className="icon_login">
        <Image src={IconLogin} alt="" />
      </div>
      <div className="box_login">
        <h2>Bem vindo ao Code Help!</h2>

        <div>
          <button className="btn_login btn" onClick={() => signIn("google")}>
            Join with
            <Image src={IocnGoogle} alt="" />
          </button>
          <span />
          <button className="btn_create btn">Create account</button>
        </div>
      </div>
    </section>
  )
}
