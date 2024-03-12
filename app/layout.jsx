import React from 'react'
import '@/assets/styles/global.css';

export const metadata={
    'title':'Property Pulse',
    'description':'Find Your Dream Rental Property',
    'keywords':'rental, find rentals, find properties'
}
const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div>{children}</div>
        </body>
    </html>
  )
}

export default MainLayout