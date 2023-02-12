import Header from '../../components/Header/Header'
import Separator from '../../components/Separator/Separator'
import Tweet from '../../components/Tweet/Tweet'
import './styles/Timeline.css'

const tweets = [
    'Olá mundo!'  
  ]

const TimeLine = () => {
  return (
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

          {tweets.map(tweet => {
            return <Tweet key={tweet} content={tweet}/>
          })}
        </main>
  )
}

export default TimeLine