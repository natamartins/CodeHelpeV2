import Image from "next/image";
import LogoIcon from '@/img/bx-code-alt.svg'
import Profile from '@/img/my-photo.jpeg'
export default function Home() {
  return (
    <>
      <header className="header">
        <nav className="header_nav-bar container">
          <h1>Code Help-BR <Image src={LogoIcon} alt="logo icon" /></h1>
          <ul className="header_list-link">
            <li className="header_list-link-btn">
              <button>Create</button>
            </li>
            <li className="header_list-link-prifile">
              <p>img profile</p>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container_main container">
        <div className="content_grid-one">

          <div className="card_profile">
            <div className="card_profile-background"></div>
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
          </div>

          <div className="card_notification">
            <p>notification</p>
            <p>message</p>
          </div>

          <button className="content_grid-one-btn-create">Create Post</button>

        </div>
        <div className="content_grid-two">posts</div>
        <div className="content_grid-three">message</div>
      </main>
      <footer>
      </footer>
    </>
  )
}
