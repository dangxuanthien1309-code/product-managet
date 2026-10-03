import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// 1. TRANG TỔNG QUAN (DASHBOARD)
const TrangChu = () => {
  return (
    <div>
      <h2 style={{ color: '#1e293b', marginBottom: '20px' }}>Tổng quan hệ thống</h2>
      
      {/* Thống kê nhanh */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <StatCard title="Tổng doanh thu" value="4.650.000đ" color="#2563eb" icon="💰" />
        <StatCard title="Đơn hàng mới" value="12" color="#16a34a" icon="🛒" />
        <StatCard title="Sản phẩm tồn kho" value="128" color="#d97706" icon="📦" />
        <StatCard title="Khách hàng" value="45" color="#9333ea" icon="👥" />
      </div>

      {/* Thông báo hoạt động */}
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#334155' }}>Hoạt động gần đây</h3>
        <ul style={{ paddingLeft: '20px', color: '#64748b', lineHeight: '1.8' }}>
          <li>Đơn hàng <strong>#DH001</strong> đã hoàn thành giao hàng thành công.</li>
          <li>Sản phẩm <strong>Giày Sneaker Nam</strong> vừa cập nhật số lượng tồn kho.</li>
          <li>Khách hàng <strong>Trần Thị B</strong> đã đặt một đơn hàng mới.</li>
        </ul>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color, icon }) => (
  <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div>
      <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>{title}</p>
      <h3 style={{ margin: '8px 0 0 0', color: color, fontSize: '22px' }}>{value}</h3>
    </div>
    <div style={{ fontSize: '30px' }}>{icon}</div>
  </div>
);

// 2. TRANG QUẢN LÝ SẢN PHẨM (CÓ TÍNH NĂNG THÊM SẢN PHẨM BẰNG MODAL)
const SanPham = () => {
  // State lưu danh sách sản phẩm
  const [products, setProducts] = useState([
    { id: 'SP01', name: 'Áo Sơ Mi Nam White Slimfit', price: 350000, stock: 45, status: 'Còn hàng' },
    { id: 'SP02', name: 'Quần Jean Denim Premium', price: 490000, stock: 12, status: 'Còn hàng' },
    { id: 'SP03', name: 'Giày Sneaker Sport Dynamic', price: 750000, stock: 0, status: 'Hết hàng' },
    { id: 'SP04', name: 'Áo Khoác Bomber Black', price: 620000, stock: 28, status: 'Còn hàng' },
  ]);

  // State quản lý việc ẩn/hiện Modal Thêm sản phẩm
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // State lưu thông tin form nhập dữ liệu
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    stock: ''
  });

  // Hàm xử lý khi bấm nút "Thêm mới" trong Modal
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.stock) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    const nextId = `SP0${products.length + 1}`;
    const stockNum = parseInt(newProduct.stock, 10);
    const itemToAdd = {
      id: nextId,
      name: newProduct.name,
      price: parseInt(newProduct.price, 10),
      stock: stockNum,
      status: stockNum > 0 ? 'Còn hàng' : 'Hết hàng'
    };

    // Cập nhật State danh sách sản phẩm mới
    setProducts([...products, itemToAdd]);

    // Reset Form và đóng Modal
    setNewProduct({ name: '', price: '', stock: '' });
    setIsAddModalOpen(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, color: '#1e293b' }}>Danh sách sản phẩm</h2>
        
        {/* Button mở Modal Thêm sản phẩm */}
        <button
          onClick={() => setIsAddModalOpen(true)}
          style={{
            backgroundColor: '#16a34a',
            color: '#fff',
            border: 'none',
            padding: '10px 18px',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <span>➕</span> Thêm sản phẩm
        </button>
      </div>

      {/* Bảng danh sách sản phẩm */}
      <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>
              <th style={{ padding: '14px 20px' }}>Mã SP</th>
              <th style={{ padding: '14px 20px' }}>Tên sản phẩm</th>
              <th style={{ padding: '14px 20px' }}>Đơn giá</th>
              <th style={{ padding: '14px 20px' }}>Tồn kho</th>
              <th style={{ padding: '14px 20px' }}>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '14px 20px', fontWeight: 'bold' }}>{p.id}</td>
                <td style={{ padding: '14px 20px', color: '#1e293b', fontWeight: '500' }}>{p.name}</td>
                <td style={{ padding: '14px 20px', color: '#2563eb', fontWeight: 'bold' }}>
                  {Number(p.price).toLocaleString('vi-VN')}đ
                </td>
                <td style={{ padding: '14px 20px', color: '#475569' }}>{p.stock}</td>
                <td style={{ padding: '14px 20px' }}>
                  <span style={{
                    backgroundColor: p.stock > 0 ? '#d1fae5' : '#fee2e2',
                    color: p.stock > 0 ? '#065f46' : '#991b1b',
                    padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'
                  }}>
                    {p.stock > 0 ? 'Còn hàng' : 'Hết hàng'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL THÊM SẢN PHẨM MỚI */}
      {isAddModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', width: '420px', maxWidth: '90%', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
              <h3 style={{ margin: 0, color: '#1e293b' }}>Thêm sản phẩm mới</h3>
              <button onClick={() => setIsAddModalOpen(false)} style={{ border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer', color: '#64748b' }}>✕</button>
            </div>

            <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 'bold', color: '#475569' }}>Tên sản phẩm:</label>
                <input
                  type="text"
                  placeholder="Nhập tên sản phẩm..."
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 'bold', color: '#475569' }}>Đơn giá (VNĐ):</label>
                <input
                  type="number"
                  placeholder="Ví dụ: 250000"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 'bold', color: '#475569' }}>Số lượng tồn kho:</label>
                <input
                  type="number"
                  placeholder="Ví dụ: 50"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  style={{ backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  style={{ backgroundColor: '#16a34a', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  Thêm mới
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// 3. TRANG QUẢN LÝ ĐƠN HÀNG
const DonHang = () => {
  const [orders] = useState([
    { id: 'DH001', customer: 'Nguyễn Văn A', phone: '0901234567', address: '123 Nguyễn Huệ, Q.1, TP.HCM', date: '2026-10-01', total: '1.250.000đ', status: 'Đã giao', statusBg: '#d1fae5', statusColor: '#065f46', items: ['Áo Sơ Mi x2', 'Quần Jean x1'] },
    { id: 'DH002', customer: 'Trần Thị B', phone: '0987654321', address: '45 Lê Lợi, Q.3, TP.HCM', date: '2026-10-02', total: '850.000đ', status: 'Đang xử lý', statusBg: '#fef3c7', statusColor: '#92400e', items: ['Giày Sneaker x1'] },
    { id: 'DH003', customer: 'Lê Văn C', phone: '0912345678', address: '78 Võ Văn Tần, Q.3, TP.HCM', date: '2026-10-02', total: '2.100.000đ', status: 'Đã giao', statusBg: '#d1fae5', statusColor: '#065f46', items: ['Áo Khoác Bomber x2', 'Quần Jean x2'] },
    { id: 'DH004', customer: 'Phạm Thị D', phone: '0933445566', address: '12 Điện Biên Phủ, Bình Thạnh, TP.HCM', date: '2026-10-03', total: '450.000đ', status: 'Đã hủy', statusBg: '#fee2e2', statusColor: '#991b1b', items: ['Áo Sơ Mi x1'] },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, color: '#1e293b' }}>Quản lý đơn hàng</h2>
      </div>

      <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>
              <th style={{ padding: '14px 20px' }}>Mã đơn</th>
              <th style={{ padding: '14px 20px' }}>Khách hàng</th>
              <th style={{ padding: '14px 20px' }}>Ngày đặt</th>
              <th style={{ padding: '14px 20px' }}>Tổng tiền</th>
              <th style={{ padding: '14px 20px' }}>Trạng thái</th>
              <th style={{ padding: '14px 20px' }}>Thao tác</th>
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
                  <button 
                    onClick={() => setSelectedOrder(item)}
                    style={{ border: 'none', backgroundColor: '#2563eb', color: '#fff', padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
                  >
                    Xem chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', width: '450px', maxWidth: '90%', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
              <h3 style={{ margin: 0, color: '#1e293b' }}>Chi tiết đơn hàng: {selectedOrder.id}</h3>
              <button onClick={() => setSelectedOrder(null)} style={{ border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer', color: '#64748b' }}>✕</button>
            </div>
            
            <div style={{ fontSize: '14px', color: '#334155', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ margin: 0 }}><strong>Khách hàng:</strong> {selectedOrder.customer}</p>
              <p style={{ margin: 0 }}><strong>Số điện thoại:</strong> {selectedOrder.phone}</p>
              <p style={{ margin: 0 }}><strong>Địa chỉ:</strong> {selectedOrder.address}</p>
              <p style={{ margin: 0 }}><strong>Sản phẩm đã mua:</strong> {selectedOrder.items.join(', ')}</p>
              <p style={{ margin: 0 }}><strong>Tổng tiền:</strong> <span style={{ color: '#2563eb', fontWeight: 'bold' }}>{selectedOrder.total}</span></p>
              <p style={{ margin: 0 }}><strong>Trạng thái:</strong> {selectedOrder.status}</p>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button 
                onClick={() => setSelectedOrder(null)} 
                style={{ backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// LAYOUT CHÍNH
export default function App() {
  const location = useLocation();

  const menuItems = [
    { name: 'Tổng quan', path: '/', icon: '📊' },
    { name: 'Sản phẩm', path: '/san-pham', icon: '📦' },
    { name: 'Đơn hàng', path: '/don-hang', icon: '🛒' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Inter, sans-serif', backgroundColor: '#f8fafc' }}>
      
      {/* Sidebar */}
      <div style={{ width: '240px', backgroundColor: '#0f172a', color: '#fff', padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#38bdf8', marginBottom: '30px' }}>
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
                  display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px',
                  color: isActive ? '#fff' : '#94a3b8',
                  backgroundColor: isActive ? '#2563eb' : 'transparent',
                  textDecoration: 'none', fontSize: '14px', fontWeight: isActive ? 'bold' : 'normal',
                }}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', padding: '16px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <input type="text" placeholder="Tìm kiếm đơn hàng, sản phẩm..." style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', width: '280px', outline: 'none' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#0f172a' }}>Đặng Xuân Thiện</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>2506012001</div>
            </div>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              T
            </div>
          </div>
        </header>

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