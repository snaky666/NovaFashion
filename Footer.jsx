import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 mt-8">
      <div className="container mx-auto px-4 py-6 text-center">
        © {new Date().getFullYear()} متجر الملابس - عرض تجريبي
      </div>
    </footer>
  )
}
