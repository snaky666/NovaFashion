import React from 'react'
import Router from './router'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Router />
      </main>
      <Footer />
    </div>
  )
}
