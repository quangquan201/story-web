import { useState } from "react";
import Button from "../Button/index";
import Header from "../Header";
import Footer from "../Footer";
import './HomePage.css'
import '../../index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <>
        <div id="Content" class="canhgiua">
          <header><Header/></header>
          
          <aside id="aside1" class="theloai">
            <h3>Thể loại</h3>
            <dl>
                <Link href="kinh di.html"  ><dt>Truyện kinh dị</dt></Link>
                <Link href="tam linh.html"  ><dt>Truyện tâm linh</dt></Link>
                <Link><dt>Truyện creepypasta</dt></Link>
                <Link><dt>Truyền thuyết đô thị</dt></Link>
            </dl>
          </aside>

          <article id="art1" class="decu">
          <h3>Truyện đề cử</h3>
            <div class="truyen">
              <Link to="/Details"  ><img src="images/giai-ngai-ky-tap1.jpg" class="anh"/>Giải Ngải Ký</Link>
              <p>Tác giả: Tống Ngọc</p>
            </div>
            <div class="truyen">
              <Link to="Details" ><img class="anh" src="images/giai-ngai-ky-tap2.jpg" />Giải Ngải Ký 2</Link>
              <p>Tác giả: Tống Ngọc</p>
              <p></p>
            </div>
            <div class="truyen">
              <Link to="truyen/tu huyet toc.html" ><img src="images/tu huyet toc.png" class="anh" />Tử Huyết Tóc</Link>
              <p>Tác giả: Thục Linh</p>
            </div>
          </article>

          <content class="moi">
            <h3>Truyện mới</h3>
            <div class="truyen">
              <img src="images/noel hay no end.png" class="anh" />
              <h3>Noel hay No End</h3>
              <p>Tác giả: Diệp Lâm Khánh</p>
            </div>
            <div class="truyen">
              <img class="anh" src="images/mon qua den tu coi chet.png" />
              <h3>Món Quà Đến Từ Cõi Chết</h3>
              <p>Tác giả: Diệp Lâm Khánh</p>
            </div>
            <div class="truyen">
              <img class="anh" src="images/tet o lang dia nguc.png" />
              <h3>Tết Ở Làng Địa Ngục</h3>
              <p>Tác giả: Thảo Trang</p>
            </div>
          </content>

          <footer><Footer/></footer>

        </div>
    </>
  );
};

export default HomePage;
