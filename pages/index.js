export default function Home() {
  return (
    <main className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4">İmalat Model - Eğitim Sitesi (Iterasyon 2)</h1>
      <p className="mb-4">Bu sürümde model React bileşeni haline getirildi, ayrıca ders notları ve quiz örneği eklendi.</p>
      <ul className="list-disc ml-6">
        <li><a href="/model" className="text-blue-600 underline">Model sayfası</a></li>
        <li><a href="/lessons/01-npv" className="text-blue-600 underline">Ders Notu: NPV & IRR</a></li>
      </ul>
    </main>
  )
}