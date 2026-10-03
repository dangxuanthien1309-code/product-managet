import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// 1. Component Trang Đơn Hàng (Chính)
const DonHang = () => {
  const [orders] = useState([
    { id: 'DH001', customer: 'Nguyễn Văn A', date: '2026-10-01', total: '1.250.000đ', status: 'Đã giao', statusBg: '#d1fae5', statusColor: '#065f46' },
    { id: 'DH002', customer: 'Trần Thị B', date: '2026-10-02', total: '850.000đ', status: 'Đang xử lý', statusBg: '#fef3c7', statusColor: '#92400e' },
    { id: 'DH003', customer: 'Lê Văn C', date: '2026-10-02', total: '2.100.000đ', status: 'Đã giao', statusBg: '#d1fae5', statusColor: '#065f46' },
    { id: 'DH004', customer: 'Phạm Thị D', date: '2026-10-03', total: '450.000đ', status: 'Đã hủy', statusBg: '#fee2e2', statusColor: '#991b1b' },
  ]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, color: '#1e293b' }}>Quản lý đơn hàng</h2>
        <button style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
          + Tạo đơn hàng mới
        </button>
      </div>

      {/* Bảng danh sách đơn hàng */}
      <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>
              <th style={{ padding: '14px 20px' }}>Mã đơn</th>
              <th style={{ padding: '14px 20px' }}>Khách hàng</th>
              <th style={{ padding: '14px 20px' }}>Ngày đặt</th>
              <th style={{ padding: '14px 20px' }}>Tổng tiền</th>
              <th style={{ padding: '14px 20px' }}>Trạng thái</th>
              <th style={{ padding: '14px 20px' }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '14px 20px', fontWeight: 'bold', color: '#2563eb' }}>{item.id}</td>
                <td style={{ padding: '14px 20px', color: '#334155' }}>{item.customer}</td>
                <td style={{ padding: '14px 20px', color: '#64748b' }}>{item.date}</td>
                <td style={{ padding: '14px 20px', fontWeight: '600', color: '#0f172a' }}>{item.total}</td>
                <td style={{ padding: '14px 20px' }}>
                  <span style={{ backgroundColor: item.statusBg, color: item.statusColor, padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                    {item.status}
                  </span>
                </td>
                <td style={{ padding: '14px 20px' }}>
                  <button style={{ border: '1px solid #cbd5e1', backgroundColor: '#fff', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', color: '#475569' }}>
                    Chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 2. Component Các trang khác
const TrangChu = () => <h2 style={{ color: '#1e293b' }}>Trang Tổng Quan (Dashboard)</h2>;
const SanPham = () => <h2 style={{ color: '#1e293b' }}>Quản lý sản phẩm</h2>;

// 3. Layout Tổng thể (Sidebar + Header + Content)
export default function App() {
  const location = useLocation();

  const menuItems = [
    { name: 'Tổng quan', path: '/', icon: '📊' },
    { name: 'Sản phẩm', path: '/san-pham', icon: '📦' },
    { name: 'Đơn hàng', path: '/don-hang', icon: '🛒' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Inter, sans-serif', backgroundColor: '#f8fafc' }}>
      
      {/* Sidebar - Menu bên trái */}
      <div style={{ width: '250px', backgroundColor: '#0f172a', color: '#fff', padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#38bdf8', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          🛒 THIỆN STORE
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  color: isActive ? '#fff' : '#94a3b8',
                  backgroundColor: isActive ? '#2563eb' : 'transparent',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: isActive ? 'bold' : 'normal',
                }}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Header trên cùng */}
        <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', padding: '16px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="Tìm kiếm đơn hàng, sản phẩm..." 
            style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', width: '300px', outline: 'none' }} 
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#0f172a' }}>Đặng Xuân Thiện</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>2506012001</div>
            </div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              T
            </div>
          </div>
        </header>

        {/* Nội dung thay đổi theo đường dẫn */}
        <main style={{ padding: '30px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<TrangChu />} />
            <Route path="/san-pham" element={<SanPham />} />
            <Route path="/don-hang" element={<DonHang />} />
          </Routes>
        </main>
      </div>

    </div>
  );
}