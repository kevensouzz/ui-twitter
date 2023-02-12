import TwitterLogo from '../../assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'
import './styles/SideBar.css'

const SideBar = () => {
    return (
        <aside className='sideBar'>
        <img className='logo' src={TwitterLogo} alt="Logo" />

        <nav className='main-navigation'>
          <a href="">
            <House />
             Home
             </a>

          <a href="">
            <Hash />
            Explorer
            </a>
            
          <a href="">
            <Bell />
            Notification
            </a>

          <a href="">
            <Envelope />
            Messages
            </a>

          <a href="">
            <BookmarkSimple />
            BookMarks
            </a>

          <a href="">
            <FileText />
            Lists
            </a>

          <a href="">
            <User />
            Profile
            </a>

          <a href="">
            <DotsThreeCircle />
            More
            </a>
        </nav>

        <button className='new-tweet'>
          Tweet
        </button>
      </aside>
    )
}

export default SideBar