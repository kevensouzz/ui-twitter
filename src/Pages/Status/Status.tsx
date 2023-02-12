import Header from "../../components/Header/Header"
import Separator from "../../components/Separator/Separator"
import Tweet from "../../components/Tweet/Tweet"
import './styles/Status.css'

const answers = [
    "Olá Keven! :D"
]

const Status = () => {
  return (
    <main className='Status'>
    <Header title='Tweet' />

    <Tweet content="Olá mundo!" />

    <Separator />

    <form className='answer-tweet-form'>
      <label htmlFor="tweet">
        <img src="https://github.com/kevensouzz.png" alt="Keven Souza" />
        <textarea id='tweet' placeholder="Tweet your answer" />
      </label>

      <button type="submit">Answer</button>
    </form>

    {answers.map(answer => {
      return <Tweet key={answer} content={answer}/>
    })}
  </main>
  )
}

export default Status