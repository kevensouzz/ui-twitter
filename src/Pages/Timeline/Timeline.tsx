import { FormEvent, useState } from 'react'
import Header from '../../components/Header/Header'
import Separator from '../../components/Separator/Separator'
import Tweet from '../../components/Tweet/Tweet'
import './styles/Timeline.css'

const TimeLine = () => {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Olá mundo!'  
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  return (
    <main className='timeLine'>
          <Header title='Home' />

          <form onSubmit={createNewTweet} className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/kevensouzz.png" alt="Keven Souza" />
              <textarea id='tweet' placeholder="what's happening?" value={newTweet} onChange={(event) => setNewTweet(event.target.value)} />
            </label>

            <button type="submit">
              <span>Tweet</span>
            </button>
          </form>

          <Separator />

          {tweets.map(tweet => {
            return <Tweet key={tweet} content={tweet}/>
          })}
        </main>
  )
}

export default TimeLine