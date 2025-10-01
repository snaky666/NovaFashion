import React from 'react'

export default function Checkout(){
  const handleSubmit = (e)=>{ e.preventDefault(); alert('تم إنشاء الطلب - الدفع عند الاستلام') }
  return (
    <div>
      <h1 className="text-2xl mb-4">إتمام الطلب (الدفع عند الاستلام)</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <label className="block">الاسم<input required className="w-full p-2 border rounded mt-1" /></label>
        <label className="block mt-3">الهاتف<input required className="w-full p-2 border rounded mt-1" /></label>
        <label className="block mt-3">العنوان<textarea required className="w-full p-2 border rounded mt-1" /></label>
        <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded">إتمام الطلب</button>
      </form>
    </div>
  )
}
