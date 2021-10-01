import { CSSProperties } from "react"

export interface CardProps {
  Icon: {
    Component: React.FC
    style: CSSProperties
  }
  title: {
    style: CSSProperties
    content: string
  }
  description: string
}

const Card: React.FC<CardProps> = ({ Icon, title, description }) => {
  return (
    <div className="features__card">
      <div className="icon__container" style={Icon.style}>
        <Icon.Component />
      </div>
      <h2 style={title.style}>{title.content}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card
