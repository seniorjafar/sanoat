import React from 'react'
import { Header } from '../../Layout/header'
import { Footer } from '../../Layout/footer'
import { Outlet } from 'react-router-dom'
   export const MainLayout = () => {
  return (
    <div>
      <header className='max-w-screen-3xl mx-auto'>
        <Header />
      </header>

      <main className='max-w-screen-3xl mx-auto'>
        <Outlet />
      </main>

      <footer className='max-w-screen-3xl mx-auto'>
        <Footer />
      </footer>
    </div>
  )
}


