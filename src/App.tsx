import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// 페이지 컴포넌트 임포트
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// 헤더 컴포넌트
const Header = () => (
  <header className="bg-blue-600 dark:bg-blue-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

// 푸터 컴포넌트
const Footer = () => (
  <footer className="p-4 mt-8 bg-gray-200 dark:bg-gray-800">
    <div className="container mx-auto text-center">
      <p>&copy; 2025 My React App</p>
    </div>
  </footer>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
        <Header />
        
        <div className="container mx-auto p-4 mt-4">
          <div className="flex justify-end mb-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {darkMode ? '라이트 모드' : '다크 모드'}
            </button>
          </div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;