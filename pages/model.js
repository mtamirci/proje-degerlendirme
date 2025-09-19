export default function ModelPage() {
  return (
    <div style={{height:'100vh', width:'100%', padding:10, boxSizing:'border-box'}}>
      <h2 style={{fontFamily:'Inter, Arial, sans-serif', marginBottom:8}}>Model Uygulaması</h2>
      <p style={{marginTop:0, marginBottom:12}}>Aşağıdaki gömülü pencere, mevcut interaktif model HTML dosyanızı gösterir. İleri adımlarda bu içeriği React bileşeni haline dönüştüreceğiz.</p>
      <iframe src="/imalat.html" title="İmalat Model" style={{width:'100%', height:'85%', border:'1px solid #e5e7eb', borderRadius:8}}></iframe>
    </div>
  )
}
