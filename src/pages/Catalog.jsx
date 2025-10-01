import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function Catalog(){
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('/products.json').then(r=>r.json()).then(data=>setProducts(data)).catch(()=>setProducts([]))
  },[])

  return (
    <div>
      <h1 className="text-2xl mb-4">التصنيفات</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p=> <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  )
}
