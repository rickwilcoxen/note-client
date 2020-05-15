import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

// Import layout:
import Layout from '../shared/Layout'

class BookIndex extends Component {
  constructor () {
    // Call the constructor on the parent class
    // Which is Component
    super()

    // UseFUL means use state:
    this.state = {
      usernotes: null
    }
  }

  // componentDidMount () {
  //   // This runs after the first render runs
  //   axios(`${apiUrl}/books`)
  //     .then(res => {
  //       this.setState({ books: res.data.books })
  //     })
  //     .catch(console.error)
  // }

  async componentDidMount () {
    try {
      const res = await axios(`${apiUrl}/usernotes`)
      this.setState({ usernotes: res.data.usernotes })
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    const { usernotes } = this.state

    let noteJsx = ''

    if (!usernotes) {
      noteJsx = 'Loading...'
    } else {
      noteJsx = (
        <ul>
          {usernotes.map(usernote => (
            <li key={usernote._id}>
              <Link to={`/usernotes/${usernote._id}`}>{usernote.title}</Link>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <Layout>
        <h1>Notes Page</h1>
        {noteJsx}
      </Layout>
    )
  }
}

export default BookIndex
