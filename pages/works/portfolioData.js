import Webstore from '../../public/portfolio/webstore1.png'
import Gvrbnik from '../../public/portfolio/gvrbnik.jpg'
import Senn from '../../public/portfolio/senn.png'
import Amptup from '../../public/agency-work/amptup.png'
import Mydelica from '../../public/agency-work/mydelica1.png'
import Thelowdown from '../../public/agency-work/thelowdown.png'

export const portfolioData = [
  {
    imageUrl: Webstore,
    imageAlt: 'Webstore',
    title: 'Online webstore',
    stack: 'MERN Stack'
  },
  {
    imageUrl: Gvrbnik,
    imageAlt: 'Gvrbnik Business Website',
    title: 'Business Website',
    stack: 'ReactJS, Material-UI'
  },
  {
    imageUrl: Senn,
    imageAlt: 'Rear view of modern home with pool',
    title: 'Desktop',
    description:
      'SENN is a desktop app that provides a model for estimating electrical dose at the site of nerve or muscle excitation.',
    stack: 'Qt, C++'
  }
]

export const agencyWork = [
  {
    imageUrl: Thelowdown,
    imageAlt: 'Thelowdown',
    title: 'Thelowdown',
    description:
      '"Thelowdown is a advice and prescriptions platform that’s on a mission to change women’s health"',
    stack: 'Node JS, PostgreSql',
    urlLink: 'https://thelowdown.com/'
  },
  {
    imageUrl: Amptup,
    imageAlt: 'Amptup',
    title: 'Amptup',
    description:
      '"Ecosystem to connect musicians to venues, making bookings simple, while eliminating time-draining admin on both sides."',
    stack: 'Vue JS',
    urlLink: 'https://amptup.com/'
  },
  {
    imageUrl: Mydelica,
    imageAlt: 'MayaHealth',
    title: 'Maya Health',
    description:
      '"Maya Health is a psychedelic therapy software solution for researchers, providers, and participants."',
    stack: 'React Native, Material-UI',
    urlLink: 'https://www.mayahealth.com/'
  }
]
