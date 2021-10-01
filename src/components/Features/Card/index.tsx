import { CSSProperties } from "react"

interface CardProps {
  image: {
    imgSource: string
    alt: string
    style: CSSProperties
  }
  title: {
    style: CSSProperties
    content: string
  }
  description: string
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="features__card">
      <div className="img__container" style={image.style}>
        <img src={image.imgSource} alt={image.alt} />
      </div>
      <h2 style={title.style}>{title.content}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card
