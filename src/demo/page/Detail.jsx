import { useState } from "react";
import Button from "../Button/index";
import Header from "../Header";
import Footer from "../Footer";
import './Detail.css'
import '../../index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Detail = () => {
  return (
    <>
    <div class="canhgiua">
        <header><Header/></header>
        
        <div class="doctruyen">
            <a href="../trang chu/trangchu.html" class="back">Trở về</a>
            <img class="anhbia" src="images/giai-ngai-ky-tap2.jpg"/>
            <div class="thongtin">
                <h3>GIẢI NGẢI KÝ PHẦN II</h3>
                <p>Tác giả: Tống Ngọc</p>
                <p>Câu chuyện mang sác màu tâm linh, kể về quá trình phiêu lưu tìm hiểu những điều thần bí, kinh dị giữa chốn đô thị phồn hoa, bên cạnh đó tác giả vẫn không quên tạo ra những tiếng cười giúp độc giả bớt "căng não".</p>
            </div>
            <dl>
                <dt>DANH SÁCH CHƯƠNG</dt>
                <hr/>
                <dd>
                    <a href="../doctruyen/giai ngai ky 2 chuong 1.html">Chương 1</a>
                </dd>
                <dd>Chương 2</dd>
                <dd>Chương 3</dd>
                <dd>Chương 4</dd>
                <dd>Chương 5</dd>
                <dd>Chương 6</dd>
                <dd>Chương 7</dd>
                <dd>Chương 8</dd>
                <dd>Chương 9</dd>
            </dl>
        </div>

        <footer><Footer/></footer>
    </div>
    </>
  );
};

export default Detail;
