import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

const Overview = () => (
  <div>
    <h2>Overview</h2>
    <p>Trang tổng quan về React Hooks. Click vào các menu bên trái để chuyển trang mà không bị reload!</p>
  </div>
);

const UseCallbackPage = () => (
  <div>
    <h2>useCallback</h2>
    <p>Hook giúp ghi nhớ (cache) định nghĩa của một hàm giữa các lần re-render.</p>
  </div>
);

const UseContextPage = () => (
  <div>
    <h2>useContext</h2>
    <p>Hook cho phép đọc và đăng ký context từ component của bạn.</p>
  </div>
);

const UseIdPage = () => (
  <div>
    <h2>useId</h2>
    <p>Hook tạo ra các ID duy nhất có thể truyền cho các thuộc tính accessibility.</p>
  </div>
);

export default function App() {
  const navStyle = ({ isActive }) => ({
    display: 'block',
    padding: '10px 14px',
    borderRadius: '6px',
    color: isActive ? '#087ea4' : '#23272f',
    backgroundColor: isActive ? '#ebf5fe' : 'transparent',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    marginBottom: '4px'
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Sidebar bên trái */}
      <aside style={{ width: '240px', borderRight: '1px solid #e5e7eb', padding: '20px' }}>
        <h3 style={{ marginTop: 0, color: '#087ea4' }}>React Hooks</h3>
        <nav>
          <NavLink style={navStyle} to="/">Overview</NavLink>
          <NavLink style={navStyle} to="/use-callback">useCallback</NavLink>
          <NavLink style={navStyle} to="/use-context">useContext</NavLink>
          <NavLink style={navStyle} to="/use-id">useId</NavLink>
        </nav>
      </aside>

      {/* Nội dung chính */}
      <main style={{ flex: 1, padding: '30px' }}>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/use-callback" element={<UseCallbackPage />} />
          <Route path="/use-context" element={<UseContextPage />} />
          <Route path="/use-id" element={<UseIdPage />} />
        </Routes>
      </main>
    </div>
  );
}