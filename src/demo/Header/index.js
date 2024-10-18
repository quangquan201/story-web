// props
// export
// render template
import React from 'react';
import './index.css';
import '../../index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
      <header>
        <div>
          <Link to='/Home' >
            <img src='../images/logo.png' class="logo" />
          </Link>
          <input
            type="search"
            placeholder="Bạn muốn tìm truyện gì"
            class="timkiem"
          />
          <Link
            to="../zdangky dangnhap/dangnhap.html"
          >
            <button class="dangnhap">Đăng nhập</button>
          </Link>
          <button class="dangky">Đăng ký</button>
        </div>
      </header>
    </>
  );
};
export default Header;
