import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './styles/Tweet.css'

interface TweetProps {
    content: string
}

const Tweet = (props: TweetProps) => {
    return (
        <Link to={'/status'} className='tweet'>
            <img src="https://github.com/kevensouzz.png" alt="Keven Souza" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Keven Souza</strong>
                    <span>@kevensouzz</span>
                </div>

                <p>{props.content}</p>

                <div className="tweet-content-footer">
                    <button type='button'>
                        <ChatCircle />
                        0
                    </button>
                    
                    <button type='button'>
                        <ArrowsClockwise />
                        0
                    </button>

                    <button type='button'>
                        <Heart />
                        0
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default Tweet