import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'
import NoteForm from '../../Shared/NoteForm'
import Layout from '../../Shared/Layout'

class NoteUpdate extends Component {
  constructor () {
    super()
    this.state = {
      usernote: null,
      updated: false
    }
  }

  componentDidMount () {
    const { user } = this.props
    // axios request
    axios({
      url: `${apiUrl}/usernotes/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => {
        this.setState({ usernote: res.data.usernote })
      })
      .catch(console.error)
  }

  handleChange = (event) => {
    // create an object with the key/value of the field I'm typing in
    const updatedField = {
      [event.target.name]: event.target.value
    }

    // merge state and updatedField
    // merge updatedField INTO this.state.usernote
    // assign updatedField TO this.state.usernote
    const editedusernote = Object.assign(this.state.usernote, updatedField)

    // set the state
    this.setState({ usernote: editedusernote })
  }

  handleSubmit = (event) => {
    const { user } = this.props
    event.preventDefault()

    axios({
      url: `${apiUrl}/usernotes/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      method: 'PATCH',
      data: {
        usernote: this.state.usernote
      }
    })
      .then(() => {
        this.setState({ updated: true })
      })
      .catch(console.error)
  }

  render () {
    const { usernote, updated } = this.state

    let noteJsx
    if (!usernote) {
      noteJsx = 'Loading...'
    } else if (updated) {
      noteJsx = <Redirect to={'/usernotes/'}/>
    } else {
      noteJsx = (
        <NoteForm
          usernote={usernote}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }

    return (
      <Layout>
        <h1 className='underline'>Update Notes</h1>
        {noteJsx}
      </Layout>
    )
  }
}

export default withRouter(NoteUpdate)
