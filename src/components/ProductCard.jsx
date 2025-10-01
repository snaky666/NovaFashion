import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({p}){
  return (
    <div className="border rounded p-3 bg-white dark:bg-slate-900">
      <Link to={`/product/${p.id}`}>
        <img src={p.image} alt={p.title} className="w-full h-48 object-cover mb-2 rounded" />
        <h3 className="font-semibold">{p.title}</h3>
        <p className="text-sm">{p.price} د.ج</p>
      </Link>
    </div>
  )
}
