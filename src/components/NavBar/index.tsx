import { ChevronDown, Logo } from "../Icons"

const NavBar = () => {
  return (
    <nav>
      <div className="logo__container">
        <Logo />
      </div>
      <div className="nav__list">
        <ul>
          <li>Prices</li>
          <li>Learn</li>
          <li className="resources">
            Resources <ChevronDown />
          </li>
          <li>Blog</li>
          <li>Sign In</li>
        </ul>
        <button className="primary__button">Free Trial</button>
      </div>
    </nav>
  )
}

export default NavBar
