import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'
import { Sparkle } from 'phosphor-react'
import Tweet from './components/Tweet/Tweet'
import SideBar from './components/SideBar/SideBar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <SideBar />
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

          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
