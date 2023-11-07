"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import IconLogin from '@/img/icon_login.svg'
import IocnGoogle from '@/img/google.png'
import GithubIcon from "@/img/github.svg"

export default function Home() {
  const { data: session } = useSession()

  if (session?.user) {
    window.location.href = "/home"
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
            Join with google
            <Image src={IocnGoogle} alt="" />
          </button>
          <button className="btn_login btn" onClick={() => signIn("github")}>
            Join with github
            <Image src={GithubIcon} alt="" width={35} height={35} />
          </button>
        </div>
      </div>
    </section>
  )
}
