import { Sparkle } from 'phosphor-react'
import './styles/Header.css'

interface HeaderProps {
  title: string
}

const Header = (props: HeaderProps) => {
  return (
    <div className="timeLine-header">
            {props.title}
            <Sparkle />
          </div>
  )
}

export default Header