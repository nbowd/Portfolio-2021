import Pdf from '../../assets/documents/NickBowdenResume2021.pdf'
export const SocialData = [
  {
    platform:"Linkdin",
    link:"https://www.linkedin.com/in/nicholas-bowden/",
    icon: require('../../assets/icons/linkedin.png').default,
  },
  {
    platform:"Github",
    link:"https://github.com/nbowd",
    icon: require('../../assets/icons/github.png').default,
  },
  {
    platform:"Email",
    link:"mailto:bowdenn@oregonstate.edu",
    icon: require('../../assets/icons/email.png').default,
  },
  {
    platform:"Resume",
    link: Pdf,
    icon: require('../../assets/icons/resume.png').default
  }
]