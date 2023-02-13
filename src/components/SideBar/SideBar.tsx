import TwitterLogo from '../../assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react'
import './styles/SideBar.css'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
        <aside className='sideBar'>
        <img className='logo' src={TwitterLogo} alt="Logo" />

        <nav className='main-navigation'>
          <NavLink to={'/'}>
            <House />
             <span>Home</span>
             </NavLink>

          <a href="">
            <Hash />
            <span>Explorer</span>
            </a>
            
          <a href="">
            <Bell />
            <span>Notification</span>
            </a>

          <a href="">
            <Envelope />
            <span>Messages</span>
            </a>

          <a href="">
            <BookmarkSimple />
            <span>BookMarks</span>
            </a>

          <a href="">
            <FileText />
            <span>Lists</span>
            </a>

          <a href="">
            <User />
            <span>Profile</span>
            </a>

          <a href="">
            <DotsThreeCircle />
            <span>More</span>
            </a>
        </nav>

        <button className='new-tweet'>
          <Pencil />
          <span>Tweet</span>
        </button>
      </aside>
    )
}

export default SideBar