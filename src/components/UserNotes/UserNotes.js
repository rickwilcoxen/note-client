import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

// import messages from '../AutoDismissAlert/messages'

import NoteForm from '../../Shared/NoteForm'
// import Button from 'react-bootstrap/Button'
import Layout from '../../Shared/Layout'

class NoteCreate extends Component {
  constructor () {
    super()
    this.state = {
      usernote: {
        title: '',
        contents: '',
        tag: ''
      },
      createdId: null
    }
  }

  handleChange = (event) => {
    const updatedField = {
      [event.target.name]: event.target.value
    }
    const editedNote = Object.assign(this.state.usernote, updatedField)

    this.setState({ usernote: editedNote })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await axios({
        url: `${apiUrl}/usernotes`,
        method: 'POST',
        data: {
          usernote: this.state.usernote
        }
      })
      this.setState({ createdId: res.data.usernote._id })
    } catch (err) {
      console.error(err)
    }
  }
  //  onCreateNote = event => {
  //    event.preventDefault()
  //
  //    const { msgAlert, history, setUser } = this.props
  //
  //    userNote(this.state)
  //      .then(res => setUser(res.data.user))
  //      .then(() => msgAlert({
  //        heading: 'Note Created Successfully',
  //        message: messages.newNoteSuccess,
  //        variant: 'success'
  //      }))
  //      .then(() => history.push('/'))
  //      .catch(error => {
  //        this.setState({ title: '', contents: '' })
  //        msgAlert({
  //          heading: 'Creation Failed with error: ' + error.message,
  //          message: messages.newNoteFailure,
  //          variant: 'danger'
  //        })
  //      })
  //  }

  render () {
    const { usernote, createdId } = this.state

    let noteJsx

    if (createdId) {
      // redirect
      noteJsx = <Redirect to={`/usernotes/${createdId}`}/>
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
        <h1>Create Note</h1>
        {noteJsx}
      </Layout>
    //      <div className="row">
    //        <div className="col-sm-10 col-md-8 mx-auto mt-5">
    //          <h3>New Note</h3>
    //          <NoteForm onSubmit={this.onCreateNote}>
    //            <NoteForm.Group controlId="title">
    //              <NoteForm.Label>Title of Note</NoteForm.Label>
    //              <NoteForm.Control
    //                required
    //                type="text"
    //                name="title"
    //                value={title}
    //                placeholder="Give your note a title"
    //                onChange={this.handleChange}
    //              />
    //            </NoteForm.Group>
    //            <NoteForm.Group controlId="contents">
    //              <NoteForm.Label>Note contents</NoteForm.Label>
    //              <NoteForm.Control
    //                required
    //                name="contents"
    //                value={contents}
    //                type="text"
    //                placeholder="Write your note!"
    //                onChange={this.handleChange}
    //              />
    //            </NoteForm.Group>
    //            <NoteForm.Group controlId="tag">
    //              <NoteForm.Label>Note tag</NoteForm.Label>
    //              <NoteForm.Control
    //                required
    //                name="tag"
    //                value={tag}
    //                type="text"
    //                placeholder="Note tag"
    //                onChange={this.handleChange}
    //              />
    //            </NoteForm.Group>
    //            <Button
    //              variant="primary"
    //              type="submit"
    //            >
    //              Create note
    //            </Button>
    //          </NoteForm>
    //        </div>
    //      </div>
    )
  }
}

export default NoteCreate
