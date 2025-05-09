import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contacts';
import './App.css';

const menuItems = [
  { path: '/', icon: '🏠', text: 'Home' },
  { path: '/products', icon: '📦', text: 'Products' },
  { path: '/contact', icon: '✉️', text: 'Contact' }
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <div className={`app-container ${isSidebarOpen ? '' : 'sidebar-collapsed'}`}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? '◀' : '▶'}
        </button>

        <aside className="sidebar">
          {/* <h1 className="menu-title">{isSidebarOpen && <p className='menu-text'></p>}</h1> */}
          <nav className="vertical-menu">
            <ul>
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    <span className="menu-icon">{item.icon}</span>
                    {isSidebarOpen && <span className="menu-text">{item.text}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;