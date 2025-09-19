export default function Home() {
  return (
    <main style={{fontFamily:'Inter, Arial, sans-serif', padding:40}}>
      <h1 style={{fontSize:32, marginBottom:8}}>İmalat Model - Eğitim Sitesi (Scaffold)</h1>
      <p style={{marginBottom:16}}>Bu repo, interaktif finansal modelinizi öğrencilere açık bir eğitim sitesine dönüştürmek için hazırlanmış ilk adımı içerir.</p>
      <ul>
        <li>Model sayfası: <a href="/model">/model</a> (iframe içinde mevcut HTML)</li>
        <li>Ders notları ve MDX içerikleri daha sonra eklenecek</li>
      </ul>
      <p style={{marginTop:24}}>Kurulum için README.md dosyasını inceleyiniz.</p>
    </main>
  )
}
