export const ProjectData = [
  {
    id: 1,
    title: 'Fullstack Blog app',
    description: "Demo Credentials - Username:guest Password:guest \n The backend is built with Nodejs and Express while using Mongoose to communicate with MongoDB. Uses bcrypt hashing function to keep users passwords safe. There is a testing suite for the backend using Jest and Supertest. \n This app uses Cypress for End to End testing, this simulates how users can potentially interact with the website. \n The frontend is built with React, Styled Components, and Axios for routing. Styled Components allows for CSS to be applied using Javascript. \n In it's current state, this app could be used as a team message board. Allowing for communications to be asynchronous and keeping email inboxes uncluttered.",
    tags: ['React', 'Nodejs', 'Express', 'MongoDB', 'Cypress', 'Jest', 'JWT'],
    demo: 'https://serene-ravine-32193.herokuapp.com/',
    github: 'https://github.com/nbowd/blog-fullstack',
    video: require('../../assets/videos/BlogsVideo.mov').default,
    image: require('../../assets/images/BlogThumb.png').default
  },
  {
    id: 2 ,
    title: 'Help Desk',
    description: `A single page support ticket app using Javascript, Nodejs, and Express. \n Hover over the image to see a preview. \n The backend contains the functionality to send queries to a local mySql database using Node.js and Express. All requests go to the same URL but use different HTTP methods. \n The frontend is a UI to work with the current database entries. The ticket issue can be viewed in a pop out modal. Each issue can be edited/closed with the changes be updated on the database. \n This app could benefit a team by allowing them to take the 'New Issue' button with logic and place it on user facing website. The user could fill out a form with their issue and contact information which would be stored in a database for the team to address.`,
    tags: ['Javascript', 'Nodejs', 'Express', 'MySQL'],
    github: 'https://github.com/nbowd/HelpDesk',
    video: require('../../assets/videos/HelpDeskDemo.mov').default,
    image: require('../../assets/images/HelpDeskThumb.png').default
  },
]