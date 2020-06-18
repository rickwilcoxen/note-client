import React from 'react'
// import { withRouter } from 'react-router-dom'
import SolidButton from '../../Shared/SolidButton'
import { Link } from 'react-router-dom'

const Home = () => {
  const backgroundImageUrl = 'https://media.giphy.com/media/UYBDCJjwOd9Re/giphy.gif'

  const homeStyles = {
    /* Center the heading inside the container */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    /* Set background image */
    backgroundImage: `url(${backgroundImageUrl})`,
    /* Covers the entire width of the div */
    backgroundSize: 'repeat',
    /* Center the background */
    backgroundPosition: 'center',

    /* Take up half the viewport's height, (50 out of 100) */
    height: '100vh',
    width: '100vw',
    color: 'White',
    textAlign: 'center'
  }
  return (
    <div style={homeStyles}>
      <div>
        <h1>One Stop For All Your [Brain]Notes</h1>
        <p>A safe space for mental health resources and more. Sign in to start taking your notes.</p>
        <Link to='/About'>
          <SolidButton>About</SolidButton>
        </Link>
        <Link to='/About'>
          <SolidButton>Mental Health Resources</SolidButton>
        </Link>
      </div>
    </div>
  )
}
export default Home
