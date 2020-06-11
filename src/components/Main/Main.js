import React from 'react'
// import { withRouter } from 'react-router-dom'

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
      </div>
    </div>
  )
}
export default Home
