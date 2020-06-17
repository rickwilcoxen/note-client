import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

// Import layout:
import Layout from '../../Shared/Layout'

class NoteIndex extends Component {
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
    const { user } = this.props
    try {
      const res = await axios({
        url: `${apiUrl}/usernotes`,
        headers: {
          'Authorization': `Token token=${user.token}`
        },
        method: 'GET'
      })
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
          {usernotes.map(usernotes => (
            <li key={usernotes.id}>
              <Link to={`/usernotes/${usernotes.id}`}>{usernotes.title}</Link>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <Layout>
        <h1 className='underline'>Notes Page</h1>
        {noteJsx}
      </Layout>
    )
  }
}

export default withRouter(NoteIndex)
