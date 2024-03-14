import React from 'react'
import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata={
    'title':'Property Pulse',
    'description':'Find Your Dream Rental Property',
    'keywords':'rental, find rentals, find properties'
}
const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Navbar/>
          <div>{children}</div>
          <Footer/>
        </body>
    </html>
  )
}

export default MainLayout