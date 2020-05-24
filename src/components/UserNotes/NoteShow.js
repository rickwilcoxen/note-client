import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import Layout from '../../Shared/Layout'

class NotesShow extends Component {
  constructor () {
    super()

    // useful!!! state!!!
    this.state = {
      usernotes: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user } = this.props
    axios({
      url: `${apiUrl}/usernotes/${this.props.match.params._id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => {
        console.log(res)
        this.setState({ usernotes: res.data.usernotes })
      })
      .catch(console.error)
  }

  destroy = (event) => {
    const { user } = this.props
    axios.delete({
      url: `${apiUrl}/usernotes/${this.props.match.params._id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(() => {
        this.setState({ deleted: true })
      })
      .catch(console.error)
  }

  render () {
    const { usernotes, deleted } = this.state

    let noteJsx
    if (!usernotes) {
      noteJsx = 'Loading...'
    } else if (deleted) {
      // If we deleted the usernote, redirect to `/usernotes`
      noteJsx = <Redirect to="/usernotes"/>
    } else {
      noteJsx = (
        <div>
          <h3>Title: {usernotes.title}</h3>
          <h4>Contents: {usernotes.contents}</h4>
          <h4>Tag: {usernotes.tag}</h4>
          <button onClick={this.destroy}>Delete</button>
          <button>
            <Link to={`/usernotes/${this.props.match.params._id}/edit`}>Update</Link>
          </button>
        </div>
      )
    }

    return (
      <Layout>
        <h1>Show Notes</h1>
        {noteJsx}
      </Layout>
    )
  }
}

export default NotesShow
