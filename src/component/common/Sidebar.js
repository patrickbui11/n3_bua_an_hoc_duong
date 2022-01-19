import React from "react";

export default function Sidebar() {
 
  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };
  return (
    <div id="mySidebar" className="sidebar">
      <a className="closebtn" onClick={() => closeNav()}>
        ×
      </a>
      <a href="/">Đơn Hàng</a>
      <a href="/checkoder">Kiểm tra đơn hàng</a>
      <a href="/thong-ke">Thống Kê</a>
    </div>
  );
}
