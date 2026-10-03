import React from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';

// Trang chủ Portfolio
const Home = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Thông tin cá nhân */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: '#087ea4',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          fontWeight: 'bold',
          margin: '0 auto 20px'
        }}>
          T
        </div>
        <h1 style={{ fontSize: '32px', color: '#1a202c', marginBottom: '8px' }}>Đặng Xuân Thiện</h1>
        <p style={{ fontSize: '18px', color: '#4a5568', margin: '4px 0' }}>MSSV: 2506012001 (Ví dụ)</p>
        <p style={{ fontSize: '16px', color: '#718096' }}>Lớp: Công Nghệ Thông Tin | Lập trình Web với React</p>

        {/* Liên kết mạng xã hội */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '16px' }}>
          <a href="https://github.com/dangxuanthien1309-code" target="_blank" rel="noreferrer" style={socialLinkStyle}>GitHub</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" style={socialLinkStyle}>Facebook</a>
          <a href="mailto:example@gmail.com" style={socialLinkStyle}>Email</a>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '40px 0' }} />

      {/* Danh sách các bài tập / Dự án */}
      <div>
        <h2 style={{ fontSize: '24px', color: '#2d3748', marginBottom: '20px' }}>Danh sách Bài tập / Lab</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <ProjectCard 
            title="Lab 1: React Router & Hooks" 
            desc="Sử dụng Routes, NavLink, useCallback, useContext, useId." 
            link="/hooks-demo" 
          />
          <ProjectCard 
            title="Lab 2: Quản lý Sản phẩm" 
            desc="Ứng dụng CRUD sản phẩm cơ bản sử dụng React State." 
            link="/product-management" 
          />
          <ProjectCard 
            title="Lab 3: Giỏ hàng & Thanh toán" 
            desc="Mô phỏng tính năng giỏ hàng mua sắm." 
            link="/cart-demo" 
          />
        </div>
      </div>
    </div>
  );
};

// Component thẻ dự án
const ProjectCard = ({ title, desc, link }) => (
  <div style={{
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s',
  }}>
    <h3 style={{ marginTop: 0, color: '#087ea4', fontSize: '18px' }}>{title}</h3>
    <p style={{ color: '#4a5568', fontSize: '14px', minHeight: '40px' }}>{desc}</p>
    <Link to={link} style={{
      display: 'inline-block',
      marginTop: '10px',
      padding: '8px 16px',
      backgroundColor: '#087ea4',
      color: '#fff',
      borderRadius: '6px',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500'
    }}>
      Xem chi tiết &rarr;
    </Link>
  </div>
);

// Nội dung trang demo Hooks
const HooksDemo = () => (
  <div style={{ padding: '20px' }}>
    <Link to="/" style={{ color: '#087ea4', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Quay lại Trang chủ</Link>
    <h2 style={{ marginTop: '20px' }}>Lab 1: React Hooks Demo</h2>
    <p>Nội dung chi tiết bài tập React Hooks của Đặng Xuân Thiện.</p>
  </div>
);

// Style cho nút mạng xã hội
const socialLinkStyle = {
  padding: '6px 14px',
  borderRadius: '20px',
  border: '1px solid #cbd5e0',
  color: '#4a5568',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: '500'
};

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f7fafc', fontFamily: 'sans-serif' }}>
      {/* Thanh Header */}
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '20px', fontWeight: 'bold', color: '#087ea4', textDecoration: 'none' }}>
          Thiện's Web Portfolio
        </Link>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#087ea4' : '#4a5568', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>Trang chủ</NavLink>
          <NavLink to="/hooks-demo" style={({ isActive }) => ({ color: isActive ? '#087ea4' : '#4a5568', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>Bài tập Hooks</NavLink>
        </nav>
      </header>

      {/* Điều hướng đường dẫn */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hooks-demo" element={<HooksDemo />} />
        <Route path="/product-management" element={<HooksDemo />} />
        <Route path="/cart-demo" element={<HooksDemo />} />
      </Routes>
    </div>
  );
}