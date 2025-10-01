import React, { useEffect, useState } from 'react'

export default function Admin(){
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch('/products.json').then(r=>r.json()).then(data=>setProducts(data)).catch(()=>{})
  },[])

  return (
    <div>
      <h1 className="text-2xl mb-4">لوحة الإدارة (محلية)</h1>
      <p>إضافة/تعديل محلي - التغييرات غير محفوظة بعد إعادة تحميل الصفحة.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p=> <div key={p.id} className="border p-3 rounded bg-white dark:bg-slate-900"><h3>{p.title}</h3><p>{p.price} د.ج</p></div>)}
      </div>
    </div>
  )
}
