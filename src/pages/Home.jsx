import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <section className="mb-8">
        <div className="rounded-lg p-8 text-white bg-gradient-to-r from-[#2563EB] to-[#3B82F6]">
          <h1 className="text-3xl font-bold">تخفيضات الموسم</h1>
          <p className="mt-2">اكتشف أحدث تشكيلاتنا الآن.</p>
          <Link to="/catalog" className="inline-block mt-4 px-4 py-2 bg-white text-[#2563EB] rounded">تسوق الآن</Link>
        </div>
      </section>
      <section>
        <h2 className="text-2xl mb-4">أحدث المنتجات</h2>
        <p>تصفح التشكيلة، اضف للمفضلة أو للسلة.</p>
      </section>
    </div>
  )
}
