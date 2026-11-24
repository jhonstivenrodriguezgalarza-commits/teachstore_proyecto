
import Navbar from './Navbar.jsx';

function App() {
  return (

    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">
      <Navbar />
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {/* Tarjeta 1 */}
  <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
    <img src="https://gamerscolombia.com/cdn/shop/files/D_NQ_NP_713813-MLA93502391969_092025-O.webp?v=1776377358&width=1024" />
    <h3 className="font-bold text-lg">Mouse Inalámbrico</h3>
    <p className="text-texto-dim text-sm">Mouse ergonómico, conexión Bluetooth</p>
    <p className="text-verde font-extrabold">$89.900</p>
  </div>

  {/* Tarjeta 2 */}
  <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGSVZzl1cEZWUTqd8GAzJ_gD35LQFZkZ6lfbUuv_qvw&s=10" className="rounded-lg" />
    <h3 className="font-bold text-lg">Teclado Mecánico</h3>
    <p className="text-texto-dim text-sm">Switches azules, retroiluminado RGB</p>
    <p className="text-verde font-extrabold">$149.900</p>
  </div>

  {/* Tarjeta 3 */}
  <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
    <img src="https://http2.mlstatic.com/D_NQ_NP_943876-MLA99927123921_112025-O.webp" className="rounded-lg" />
    <h3 className="font-bold text-lg">Monitor 24"</h3>
    <p className="text-texto-dim text-sm">Full HD, 75Hz, panel IPS</p>
    <p className="text-verde font-extrabold">$899.900</p>
  </div>

</section>

      <footer className="flex justify-between items-center p-6 bg-texto text-white">
        <p>© 2026 TechStore Pro</p>
        <p className="text-sm">Hecho con Tailwind CSS</p>
      </footer>

    </main>
  )
}

export default App