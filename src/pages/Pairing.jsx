
import { useState } from 'react';
import axios from 'axios';

export default function Pairing() {
  const [code, setCode] = useState(null);

  const generateCode = async () => {
    const res = await axios.get('http://localhost:5000/pairing/generate');
    setCode(res.data.code);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2 font-bold">Generate Kode Pairing</h2>
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded"
        onClick={generateCode}
      >
        Generate
      </button>
      {code && <p className="mt-4 text-lg">Kode kamu: <strong>{code}</strong></p>}
      <p className="text-sm text-gray-400">Ketik "#pair {code}" dari WhatsApp Anda.</p>
    </div>
  );
}
