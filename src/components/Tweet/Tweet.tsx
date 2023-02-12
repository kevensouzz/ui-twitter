import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './styles/Tweet.css'

interface TweetProps {
    content: string
}

const Tweet = (props: TweetProps) => {
    return (
        <a href='#' className='tweet'>
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
                        1
                    </button>
                    
                    <button type='button'>
                        <ArrowsClockwise />
                        0
                    </button>

                    <button type='button'>
                        <Heart />
                        82
                    </button>
                </div>
            </div>
        </a>
    )
}

export default Tweet