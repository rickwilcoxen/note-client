import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import UserNotes from '../UserNotes/UserNotes'
import NoteIndex from '../UserNotes/NoteIndex'
import NotesShow from '../UserNotes/NoteShow'
import NoteUpdate from '../UserNotes/NoteUpdate'
import Home from '../Main/Main'
import About from '../About/About'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/usernotes' render={({ match }) => (
            <UserNotes match={match} msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/usernotes' render={({ match }) => (
            <NoteIndex match={match} msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/usernotes/:id' render={({ match }) => (
            <NotesShow match={match} msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/usernotes/:id/edit' render={({ match }) => (
            <NoteUpdate match={match} msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
