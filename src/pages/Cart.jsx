import React, { useState, useEffect } from 'react'

export default function Cart(){
  const [cart, setCart] = useState([])
  useEffect(()=>{
    const saved = localStorage.getItem('cart')
    if(saved) setCart(JSON.parse(saved))
  },[])

  const removeItem = (id)=>{
    const updated = cart.filter(i=>i.id!==id)
    setCart(updated); localStorage.setItem('cart', JSON.stringify(updated))
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">سلة التسوق</h1>
      {cart.length===0 ? <p>السلة فارغة</p> : (
        <div className="space-y-3">
          {cart.map(i=> (
            <div key={i.id} className="p-3 border rounded flex items-center justify-between">
              <div>
                <div className="font-semibold">{i.title}</div>
                <div className="text-sm">{i.price} د.ج</div>
              </div>
              <button onClick={()=>removeItem(i.id)} className="px-3 py-1 bg-red-500 text-white rounded">حذف</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
