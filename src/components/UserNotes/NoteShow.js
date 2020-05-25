import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'
import Layout from '../../Shared/Layout'

class NotesShow extends Component {
  constructor () {
    super()

    // useful!!! state!!!
    this.state = {
      usernote: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user } = this.props
    axios({
      url: `${apiUrl}/usernotes/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => {
        // console.log(res)
        this.setState({ usernote: res.data.usernote })
      })
      .catch(console.error)
  }

  destroy = (event) => {
    const { user, msgAlert } = this.props
    axios.delete({
      url: `${apiUrl}/usernotes/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(() => {
        this.setState({ deleted: true })
        msgAlert({
          heading: 'Note Deleted Successfully',
          message: messages.deleteSuccess,
          variant: 'success'
        })
      })
      .catch(console.error)
  }

  render () {
    const { usernote, deleted } = this.state

    let noteJsx
    if (!usernote) {
      noteJsx = 'Loading...'
    } else if (deleted) {
      // If we deleted the usernote, redirect to `/usernotes`
      noteJsx = <Redirect to="/usernotes"/>
    } else {
      noteJsx = (
        <div>
          <h3>Title: {usernote.title}</h3>
          <h4>Contents: {usernote.contents}</h4>
          <h4>Tag: {usernote.tag}</h4>
          <button onClick={this.destroy}>Delete</button>
          <button>
            <Link to={`/usernotes/${this.props.match.params.id}/edit`}>Update</Link>
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
