
import { useState } from 'react';
import axios from 'axios';

export default function SendMessage() {
  const [form, setForm] = useState({ code: '', to: '', message: '' });
  const [res, setRes] = useState(null);

  const handleSend = async () => {
    try {
      const r = await axios.post('http://localhost:5000/api/send', form);
      setRes(r.data.status);
    } catch (err) {
      setRes(err.response?.data?.error || 'Gagal kirim');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2 font-bold">Kirim Pesan WhatsApp</h2>
      <input className="border p-2 w-full mb-2 text-black" placeholder="Kode Pairing" onChange={e => setForm({ ...form, code: e.target.value })} />
      <input className="border p-2 w-full mb-2 text-black" placeholder="Nomor Tujuan (628xxxx)" onChange={e => setForm({ ...form, to: e.target.value })} />
      <textarea className="border p-2 w-full mb-2 text-black" placeholder="Isi pesan" onChange={e => setForm({ ...form, message: e.target.value })} />
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleSend}>
        Kirim
      </button>
      {res && <p className="mt-2 text-sm text-gray-200">{res}</p>}
    </div>
  );
}
