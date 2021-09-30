//importing components & styles
import "../styles/default.scss"
import Hero from "../components/Hero"
import MainLayout from "../layouts/MainLayout"

const HomePage = () => {
  return (
    <MainLayout>
      <div className="wrapper">
        <Hero />
      </div>
    </MainLayout>
  )
}

export default HomePage
