import './globals.scss'
import {Josefin_Sans} from 'next/font/google'

export const metadata = {
  title: 'Deside Your Own Celebration',
  description: 'eventC',
}

const josefin_sans = Josefin_Sans({weight:['100' , '200' , '300' , '400' , '500' , '600' , '700'] , subsets:['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
      <body className={josefin_sans.className}>{children}
      </body>
    </html> 
  )
}
