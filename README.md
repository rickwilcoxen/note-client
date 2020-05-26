# Note Application
A mental health resource app that allows users to save information like doctor's phone numbers or med info in one place.

## Important Links
-[Other Repo](https://github.com/rickwilcoxen/note-api)
-[Deployed API](https://rocky-basin-34781.herokuapp.com/)
-[Deployed Client](https://rickwilcoxen.github.io/note-client/)

## Download/Set up Instructions
1. Fork and clone
2. Run ```npm install``` to install dependencies
3. run ```npm run start``` to start the server

## Planning Story
Other similar apps are usually only available on phones and aren't necessarily helpful for people who have vision impairments or problems using tiny screens.

Doctor's numbers can get lost in papers or other notes on phones, and med information can sometimes be difficult to remember for people with memory issues. This app is meant to be a place where users can save necessary information in a single place.

Six years ago, my best friend and current roommate began to faint constantly, have constant vertigo and was always dizzy, coupled with the fact that she could not feel her feet or hands, and had a rapid heartrate. Doctors were more than stumped and the opposite of helpful - they blamed her health issues on ridiculous things, like previous trauma or that it was psychosematic. They told her to eat salty foods and come back in 2 weeks "if it gets worse". Other non-professionals told her to use essential oils, put crystals on her head while standing upside down, and to drink more water. Needless to say, none of these things helped. At all.

When I came to know her, it was two years after she had started living with this, and she had no idea what was going on. It was about two years or so into our friendship when I asked her what she had been tested for or diagnosed with, and her answer was, "a lot of things." I asked her to write me a list.

When she did, it was three pages long. She had marked what she was tested for, and what she didn't have (which was everything, pretty much). She had been tested for everything under the sun it seemed, and nothing had lead her to any sort of answer. It was a few months after I received this list that I got searching on my own.

I googled a lot of stuff, but of course came up empty. Finally, though, I opened YouTube one day to see two videos on my recommended. One, someone experiences "absense seizures" and another, someone experiencing narcolepsy while studying and taking notes. Although we've come to later find that these are unrelated to her diagnoses, she has something incredibly similar. It took years for us to discover what was wrong - with, apparently, little help from doctors.

To think that myself, at the time an art major in college, could have figured out what my roommate was diagnosed with is absolutely mindblowing. As a result, I have wanted to create an app that helps people with this same idea, for those of us who don't have a roommate to google things for hours on end.

I hope to create a well functioning app that helps those with undiagnosed disabilities find the help they need, allowing for many different uses including listing resources, links for hotlines, and of course, taking notes.

![Plan](https://i.imgur.com/X2U8e3i.png)

### User Stories

- As a first time user I would like to be able to sign up and log in.
- As a returning user, I would like to be able to log in, change my password, and log out.
- As a returning user I would like to be able to have one source for where I save important information regarding my health including phone numbers, prescription information, and more in the form of a note.
- As a returning user, I would like to be able to view all my notes in one place so I can see everything I've created in one place.
- As a returning user, I would like to be able to edit and delete my notes.
- As any user, returning or new, I would like to be able to view mental health resources on one page for information regarding hotlines, other helpful apps or websites, and more.

### Technologies Used

- HTML/CSS
- Bootstrap
- Javascript
- React
- Ruby on Rails

### Catalog of Routes
Verb         |	URI Pattern
------------ | -------------
GET | /usernotes
GET | /usernotes/:id
POST | /usernotes
PATCH | /usernotes/:id
DELETE | /usernotes/:id

### For later Iterations...
In later versions I would like to have the app contain far more useful information and links. My overall goal is to create an app that is functional for the average individual and right now it simply contains the barebones.

1. A list of hotlines based on regions and countries. I hope to one day create a search feature for hotlines and emergency numbers contained in a database. This search feature would ask for zip codes or country names to help locate the appropriate number.
2. A calendar feature to log moods, when to take meds, or other notes. I find that some mood tracking apps aren't really that helpful when it comes to taking notes about moods or in offering support. My app will hopefully combine all the great parts of these apps.
3. A search feature for resources pertaining to different subjects, such as for LGBT Kids or Adults, for Veterans, the elderly, the homeless, and more.
4. Much further down the line I would love to be able to create a questionaire for medication side effects, which would help those trying to find the right medication for them. Rather than give someone the medication they should be taking, it will ask questions such as "do you normally get drowsy when medications warn this is a side effect" and so on. This will help individuals get closer to finding a medication that works, as many psychiatrists will have you test a medication by simply taking it for months at a time, which can negatively affect your mental health.


## Images

### Wireframes
![wireframe](https://i.imgur.com/VmyaJoF.png)

### ERD
![ERD](https://i.imgur.com/Px3X7JG.png)
