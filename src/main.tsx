import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'
import Tweet from './components/Tweet/Tweet'
import SideBar from './components/SideBar/SideBar'
import Header from './components/Header/Header'
import Separator from './components/Separator/Separator'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <SideBar />
      <div className="content">
        <main className='timeLine'>

          <Header title='Home' />

          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/kevensouzz.png" alt="Keven Souza" />
              <textarea id='tweet' placeholder="what's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <Separator />

          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
