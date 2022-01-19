import React, { useEffect, useState } from "react";
import { supabase } from "../../api";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default function Home() {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    fetchVc();
  }, []);
  const fetchVc = async () => {
    let { data, error } = await supabase
      .from("N2_don_vi_van_chuyen")
      .select("*, N1_san_pham (*), N2_trang_thai(*)");

    if (data) {
      setStatus(data);
    }
    console.log("data", data);
    console.log("error", error);
  };

  return (
    <div>
     
      {/* sidebar */}
      <div className="container-fluid">
        <div className="datetime">
          <form action="/action_page.php">
            <label htmlFor="birthday">Từ ngày:</label>
            <input type="date" id="birthday" name="birthday" />
          </form>
          <form action="/action_page.php">
            <label htmlFor="birthday">Đến ngày:</label>
            <input type="date" id="birthday" name="birthday" />
          </form>
          <div className="btn">
            <button type="button" className="btn btncll">
              {" "}
              Thống Kê{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="bang">
          <table className="table table-hover" id="table-to-xls">
            <thead>
              <tr>
                <th>Ngày Tháng</th>
                <th>Mã Đơn Hàng</th>
                <th>Tên ĐVVC</th>
                <th>Trạng Thái</th>
              </tr>
            </thead>
            <tbody>
              {status &&
                status.map((item, index) => {
                  let timevc = new Date(item.thoi_gian_vc);
                  return (
                    <tr key={index}>
                      <td>
                        {timevc.toLocaleDateString("vi-VN") +
                          " - " +
                          timevc.toLocaleTimeString("vi-VN")}
                      </td>
                      <td><a href={"/don-hang/" + item.id_dv_vc}>{item.id_dv_vc}</a></td>
                      <td>{item.ten_dv_vc}</td>
                      <td>{item.N2_trang_thai.ten_trang_thai}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="card mb-3">
        <ReactHTMLTableToExcel
        id="test-table-xls-button btn btncll"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
         
        </div>
      </div>
    </div>
  );
}
