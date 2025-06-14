
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="p-4 bg-purple-800 flex gap-4">
        <Link to="/">Pairing</Link>
        <Link to="/send">Kirim Pesan</Link>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
