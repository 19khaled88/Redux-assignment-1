import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import History from './components/History'
import Home from './components/Home'
import Navbar from './components/Navbar'
import addPost from './redux/thunk/addPost'
import getPost from './redux/thunk/getPost'
// import { baserUrl } from './helpers/basrURL'
// import { create_post, delete_post } from './redux/actionCreators.js/postActions'

function App() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const [createModal, setCreateModal] = useState('')
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [author, setAuthor] = useState(null)
  const [tags, setTags] = useState('')
  const [message, setMessage] = useState('')

  const modalHandler = (data) => {
    setCreateModal(data)
  }
  const postSubmitHandler = (e) => {
    e.preventDefault()

    const options = {
      title: title,
      description: description,
      author: author,
      tags: tags,
    }

    dispatch(addPost(options))
    // fetch(`${baserUrl}/posts`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     title: title,
    //     description: description,
    //     author: author,
    //     tags: tags,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //     if (data?.success === true) {
    //       toast('New Post created')
    //     }
    //     if (data?.success === false) {
    //       toast.error('Post create unsuccessful')
    //     }
    //   })
  }

  useEffect(() => {
    dispatch(getPost())
  }, [dispatch])

  return (
    <div className="">
      {/*<button onClick={() => postAddHandler()}>Add</button>
         <button onClick={() => postDeleteHandler()}>Delete</button>*/}
      <Navbar modalHandler={modalHandler} />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor={createModal}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">New Post</h3>
          <div className="py-4">
            <form onSubmit={postSubmitHandler}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '0px',
                }}
              >
                <label style={{ paddingLeft: '0px', fontWeight: '500' }}>
                  Post Title
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Post title"
                  style={{ border: '1px solid black', borderRadius: '5px' }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '0px',
                }}
              >
                <label style={{ paddingLeft: '0px', fontWeight: '500' }}>
                  Post Description
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Post Description"
                  style={{ border: '1px solid black', borderRadius: '5px' }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '0px',
                }}
              >
                <label style={{ paddingLeft: '0px', fontWeight: '500' }}>
                  Author of post
                </label>
                <input
                  onChange={(e) => setAuthor(e.target.value)}
                  type="text"
                  placeholder="Author name"
                  style={{ border: '1px solid black', borderRadius: '5px' }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '0px',
                }}
              >
                <label style={{ paddingLeft: '0px', fontWeight: '500' }}>
                  Tags
                </label>
                <select
                  onChange={(e) => setTags(e.target.value)}
                  value={tags}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: '0px',
                    border: '1px solid black',
                    borderRadius: '5px',
                  }}
                >
                  <option value="">Select one</option>
                  <option value="React JS">React JS</option>
                  <option value="React Native">React Native</option>
                  <option value="Node JS">Node JS</option>
                  <option value="Redux">Redux</option>
                  <option value="Firebase">Firebase</option>
                  <option value="MongoBD">MongoBD</option>
                  <option value="GraphQL">GraphQL</option>
                  <option value="Typescript">Typescript</option>
                </select>
              </div>
              <div className="modal-action">
                <label htmlFor="nice" className="btn px-0 py-0" value="">
                  <button className="w-36 h-10" type="submit">
                    New Post
                  </button>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
