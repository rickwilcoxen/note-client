import React, { Component } from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'

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
    // console.log('view url', apiUrl)
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

  handleSubmit = (event) => {
    const { user, msgAlert } = this.props

    const config = {
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: {
        usernote: this.state.usernote
      }
    }

    axios.delete(`${apiUrl}/usernotes/${this.props.match.params.id}`, config)
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
    // console.log(this.state)

    let noteJsx
    if (!usernote) {
      noteJsx = 'Loading...'
    } else if (deleted) {
      // If we deleted the usernote, redirect to `/usernotes`
      noteJsx = <Redirect to={'/usernotes/'}/>
    } else {
      noteJsx = (
        <div>
          <h3>Title: {usernote.title}</h3>
          <h4>Contents: {usernote.contents}</h4>
          <h4>Tag: {usernote.tag}</h4>
          <button onClick={this.handleSubmit}>Delete</button>
          <button>
            <Link to={`/usernotes/${this.props.match.params.id}/edit`}>Update</Link>
          </button>
        </div>
      )
    }

    return (
      <Layout>
        <h1 className='underline'>Show Notes</h1>
        {noteJsx}
      </Layout>
    )
  }
}

export default withRouter(NotesShow)
