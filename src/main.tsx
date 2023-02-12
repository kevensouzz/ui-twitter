import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'
import twitterLogo from './assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User } from 'phosphor-react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sideBar'>
        <img className='logo' src={twitterLogo} alt="Logo" />

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
      <div className="content">
        <main className='timeLine'>
          <div className="timeLine-header">
            Home
            <Sparkle />
          </div>

          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/kevensouzz.png" alt="Keven Souza" />
              <textarea id='tweet' placeholder="what's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <div className="separator" />
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
