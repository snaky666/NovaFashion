import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">متجر الملابس</Link>
        <nav className="space-x-4">
          <Link to="/catalog">التصنيفات</Link>
          <Link to="/account">الحساب</Link>
          <Link to="/cart">السلة</Link>
          <Link to="/admin">لوحة الإدارة</Link>
        </nav>
      </div>
    </header>
  )
}
