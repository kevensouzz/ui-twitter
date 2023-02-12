import { FormEvent, useState } from "react"
import Header from "../../components/Header/Header"
import Separator from "../../components/Separator/Separator"
import Tweet from "../../components/Tweet/Tweet"
import './styles/Status.css'

const Status = () => {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState(['Olá, eu mesmo! :D'])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  return (
    <main className='Status'>
    <Header title='Tweet' />

    <Tweet content="Olá mundo!" />

    <Separator />

    <form onSubmit={createNewAnswer} className='answer-tweet-form'>
      <label htmlFor="tweet">
        <img src="https://github.com/kevensouzz.png" alt="Keven Souza" />
        <textarea id='tweet' placeholder="Tweet your answer" value={newAnswer} onChange={(event) => setNewAnswer(event.target.value)} />
      </label>

      <button type="submit">
        <span>Answer</span>
        </button>
    </form>

    {answers.map(answer => {
      return <Tweet key={answer} content={answer}/>
    })}
  </main>
  )
}

export default Status