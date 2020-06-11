import React from 'react'
// import { Link } from 'react-router-dom'
// import SolidButton from '../Shared/SolidButton'
const About = () => {
  const aboutStyles = {
    /* Center the heading inside the container */
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',

    /* Take up half the viewport's height, (50 out of 100) */
    height: '100vh',
    color: 'black',
    textAlign: 'left'
  }
  return (
    <div style={aboutStyles} className='About' Style={{ flex: 1, flexDirection: 'column' }}>
      <div>
        <h1>About [Brain]Notes</h1>
        <p>Doctors office numbers can get lost in papers or other notes on phones, and med information can sometimes be difficult to remember for people with memory issues. This app is meant to be a place where users can save necessary information in a single place.</p>
        <p>[Brain]Notes seek to solve incredibly specific problems when it comes to mental health and chronic illness, namely keeping track of notes that you need either every once in a while, or every single day.</p>
        <p>Six years ago, my best friend and current roommate began to experience symptoms of an unknown illness. Doctors were more than stumped and the opposite of helpful - they blamed her health issues on ridiculous things, like previous trauma or that it was psychosematic. They told her to eat salty foods and come back in 2 weeks if it gets worse (a common excuse doctors use for those with chronic illness). Other non-professionals told her to use essential oils, put crystals on her head while standing upside down, and to drink more water. Needless to say, none of these things helped. At all.</p>
        <p>
        It seemed like no one wanted to help her, or even care about what was happening to her.
        </p>
        <p>
        When I came to know her, it was two years after she had started living with this, and she had no idea what was going on. It was about two years or so into our friendship when I asked her what she had been tested for or diagnosed with, and I asked her to write me a list.
        </p>
        <p>
        She had been tested for everything under the sun it seemed, and nothing had lead her to any sort of answer. It was a few months after I received this list that I got searching on my own.
        </p>
        <p>
        I googled a lot of stuff, but of course came up empty. Finally, though, I opened YouTube one day to see two videos on my recommended. They featured absense seizures and what narcolepsy looks like while studying. We later found out these are unrelated, but similar to her now diagnosis. It took years for us to discover what was wrong - with, apparently, seemingly little help from doctors.
        </p>
        <p>
        To think that myself, at the time an art major in college, could have figured out what my roommate was diagnosed with is absolutely mindblowing. As a result, I have wanted to create an app that helps people with this same idea, for those of us who do not have a roommate to google things for hours on end.
        </p>
        <p>
        I wanteed to create an app that could help people with chronic illness list their symptoms or other notes about very important information regarding their health.
        </p>
        <p>
        This app is an ongoing project for me. Checkout the links below to keep up with my process or to check out my code. This app, as always, is opensource and feel free to reach out with suggestions or comments.</p>
      </div>
      <div>
        <h2>Documentation</h2>
        <a href="https://github.com/rickwilcoxen/note-client">Github Repository</a>
        <p>Version 1.1: This app is still in the early stages of development. The very basic skeleton has been laid out, and you can create notes as you please. Stay tuned for more!</p>
      </div>
      <div>
        <h2>Contact Links</h2>
        <p>This app was created by Rick Wilcoxen.</p>
        <a href="https://github.com/rickwilcoxen">GitHub</a>
        <p>rickwilcoxen95@gmail.com</p>
      </div>
    </div>
  )
}
export default About
