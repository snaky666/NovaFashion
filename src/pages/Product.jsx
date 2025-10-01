import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Product(){
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(()=>{
    fetch('/products.json').then(r=>r.json()).then(data=>{
      const p = data.find(x=>String(x.id)===String(id))
      setProduct(p)
    }).catch(()=>{})
  },[id])

  if(!product) return <div>جاري التحميل...</div>
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <img src={product.image} alt={product.title} className="w-full h-auto rounded" />
      <div>
        <h1 className="text-2xl">{product.title}</h1>
        <p className="mt-4">{product.description}</p>
        <p className="mt-4 font-bold">{product.price} د.ج</p>
        <button className="mt-6 px-4 py-2 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded">أضف إلى السلة</button>
      </div>
    </div>
  )
}
