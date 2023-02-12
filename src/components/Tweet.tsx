interface TweetProps {
    user: string
    children: string
    likes?: number
}

const Tweet = (props: TweetProps) => {
    return (
        <article className="tweet">
            <h1>{props.user}</h1>
            <p>{props.children}</p>
            <button>Like {props.likes}</button>
        </article>
    )
}

export default Tweet