import React from 'react'
import { Link } from 'react-router-dom'
import '../helpers/nav.css'
const Navbar = ({ modalHandler }) => {
  return (
    <div className="Nav">
      <span>Redux-Assignment-1</span>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>

        <label
          for="my-modal"
          class="btn"
          onClick={() => modalHandler('my-modal')}
        >
          Create
        </label>
      </ul>
    </div>
  )
}

export default Navbar
