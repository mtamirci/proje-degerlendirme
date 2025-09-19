export default function Home() {
  return (
    <main className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4">
        İmalat Model - Eğitim Sitesi (Iterasyon 2)
      </h1>

      <p className="mb-6">
        Bu sitede hem finansal model uygulamasını hem de ders notlarını bulabilirsiniz.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">📊 Model</h2>
        <ul className="list-disc ml-6">
          <li>
            <a href="/model" className="text-blue-600 underline">
              Model Sayfası
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">📚 Ders Notları</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><a href="/lessons/01-npv" className="text-blue-600 underline">NPV & IRR</a></li>
          <li><a href="/lessons/02-payback" className="text-blue-600 underline">Geri Ödeme Süresi</a></li>
          <li><a href="/lessons/03-sensitivity" className="text-blue-600 underline">Duyarlılık Analizi</a></li>
          <li><a href="/lessons/04-montecarlo" className="text-blue-600 underline">Monte Carlo Simülasyonu</a></li>
          <li><a href="/lessons/05-financing" className="text-blue-600 underline">Finansman & Borç Amortismanı</a></li>
          <li><a href="/lessons/06-esg" className="text-blue-600 underline">ESG ve Yatırım Kararları</a></li>
        </ul>
      </section>
    </main>
  )
}