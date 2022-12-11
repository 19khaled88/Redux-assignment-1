import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
// import { create_post, delete_post } from './redux/actionCreators.js/postActions'

function App() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const [createModal, setCreateModal] = useState('')

  const modalHandler = (data) => {
    setCreateModal(data)
  }
  const postAddHandler = () => {
    // dispatch(create_post('khaled ahasan'))
    console.log('clicked')
  }
  const postDeleteHandler = () => {
    // dispatch(delete_post())
  }

  console.log(createModal)
  return (
    <div className="">
      {/*<button onClick={() => postAddHandler()}>Add</button>
         <button onClick={() => postDeleteHandler()}>Delete</button>*/}
      <Navbar modalHandler={modalHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <label
            for={createModal}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="my-modal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
