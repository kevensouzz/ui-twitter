import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'
import twitterLogo from './assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sideBar'>
        <img className='logo' src={twitterLogo} alt="Logo" />

        <nav className='main-navigation'>
          <a href="">
            <House weight='fill' />
             Home
             </a>

          <a href="">
            <Hash weight='fill' />
            Explorer
            </a>
            
          <a href="">
            <Bell weight='fill' />
            Notification
            </a>

          <a href="">
            <Envelope weight='fill' />
            Messages
            </a>

          <a href="">
            <BookmarkSimple weight='fill' />
            BookMarks
            </a>

          <a href="">
            <FileText weight='fill' />
            Lists
            </a>

          <a href="">
            <User weight='fill' />
            Profile
            </a>

          <a href="">
            <DotsThreeCircle weight="fill" />
            More
            </a>
        </nav>

        <button className='new-tweet'>
          Tweet
        </button>
      </aside>
      <div className="content">
        Content
      </div>
    </div>
  </React.StrictMode>,
)
