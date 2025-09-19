import { useState } from 'react'

export default function Quiz({ question, options, correctIndex }) {
  const [selected, setSelected] = useState(null)
  return (
    <div className="border rounded p-4 bg-gray-50 mt-4">
      <p className="font-semibold mb-2">{question}</p>
      {options.map((opt,i)=>(
        <div key={i} className="mb-1">
          <label>
            <input type="radio" name="quiz" value={i} onChange={()=>setSelected(i)} className="mr-2"/>
            {opt}
          </label>
        </div>
      ))}
      {selected!==null && (
        <div className="mt-2 font-bold">
          {selected===correctIndex ? '✅ Doğru!' : '❌ Yanlış, tekrar dene.'}
        </div>
      )}
    </div>
  )
}