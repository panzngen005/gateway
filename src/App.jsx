
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pairing from './pages/Pairing';
import SendMessage from './pages/SendMessage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Pairing />} />
          <Route path="/send" element={<SendMessage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
