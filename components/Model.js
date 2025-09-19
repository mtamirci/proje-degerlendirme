import { useState } from 'react'

export default function Model() {
  const [revenue, setRevenue] = useState(100)
  const [cost, setCost] = useState(50)
  const profit = revenue - cost

  return (
    <div className="border rounded p-4 bg-white shadow">
      <h3 className="text-lg font-semibold mb-2">Basit Model (Demo)</h3>
      <div className="mb-2">
        <label className="mr-2">Gelir (M TL):</label>
        <input type="number" value={revenue} onChange={e=>setRevenue(+e.target.value)} className="border p-1"/>
      </div>
      <div className="mb-2">
        <label className="mr-2">Gider (M TL):</label>
        <input type="number" value={cost} onChange={e=>setCost(+e.target.value)} className="border p-1"/>
      </div>
      <div className="font-bold">Kar: {profit} M TL</div>
    </div>
  )
}