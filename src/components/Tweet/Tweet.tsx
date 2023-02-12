import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './styles/Tweet.css'

const Tweet = () => {
    return (
        <a href='#' className='tweet'>
            <img src="https://github.com/kevensouzz.png" alt="Keven Souza" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Keven Souza</strong>
                    <span>@kevensouzz</span>
                </div>

                <p>
                    Olá mundo!
                </p>

                <div className="tweet-content-footer">
                    <button type='button'>
                        <ChatCircle />
                        72
                    </button>
                    
                    <button type='button'>
                        <ArrowsClockwise />
                        58
                    </button>

                    <button type='button'>
                        <Heart />
                        186
                    </button>
                </div>
            </div>
        </a>
    )
}

export default Tweet