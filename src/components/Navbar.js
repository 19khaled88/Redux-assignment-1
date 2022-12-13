import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../helpers/nav.css'
import sortPost from '../redux/thunk/sortPost'
const Navbar = ({ modalHandler }) => {
  const [type, setType] = useState('')
  const dispatch = useDispatch()
  const postSort = (e) => {
    dispatch(sortPost(e))
  }
  return (
    <div className="Nav">
      <span style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
        Redux-Assignment-1
      </span>
      <span style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
        Technical blog
      </span>
      <ul>
        <Link
          style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
          to="/history"
          className="cursor-pointer"
        >
          History
        </Link>
        <select onChange={(e) => postSort(e.target.value)}>
          <option className="text-lg">Sort type</option>
          <option className="text-lg" value="First Upload">
            First Upload
          </option>
          <option className="text-lg" value="Last Upload">
            Last Upload
          </option>
        </select>
        <li>
          <Link
            style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            to="/"
          >
            Home{' '}
          </Link>
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
