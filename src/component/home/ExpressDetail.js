import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../../api";

export default function ExpressDetail() {
  const [donvi, setDonvi] = useState({});
  const [nv, setNv] = useState({});
  const location = useLocation().pathname.split("/");
  let idVC = location[location.length - 1];
  useEffect(() => {
    fetchDetail();
  }, []);
  const fetchDetail = async () => {
    let { data, error } = await supabase
      .from("N2_don_vi_van_chuyen")
      .select("*, N1_san_pham (*), N2_trang_thai(*) ")
      .eq("id_dv_vc", idVC);

    console.log(data);
    if (error) console.log("error", error);
    else setDonvi(data[0]);
    fetchNV(data[0]);
  };
  const fetchNV = async (dv) => {
      let { data, error } = await supabase
        .from("N2_nhan_vien")
        .select("*")
        .eq("id_nv", dv.id_nv);

      if (error) console.log("error", error);
      else setNv(data[0]);
  };

  console.log(nv);
  let tt = donvi.N2_trang_thai;
  return (
    <div>
      {/* trang thai don hang */}
      <div className="stt">
        <div>
          <div className="card mb-3">
            {/* <div class="p-4 text-center text-white text-lg bg-dark rounded-top"><span class="text-uppercase">Tracking Order No - </span><span class="text-medium">34VB5540K83</span></div> */}
            <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
              <div className="w-100 text-center py-1 px-2">
                <span className="text-medium">Đơn vị vận chuyển:</span>{" "}
                {donvi.ten_dv_vc}
              </div>
              <div className="w-100 text-center py-1 px-2">
                <span className="text-medium">Trạng thái:</span>{" "}
                {tt && tt.ten_trang_thai}
              </div>
              <div className="w-100 text-center py-1 px-2">
                <span className="text-medium">Mã đơn hàng:</span>{" "}
                {donvi.id_dv_vc}
              </div>
            </div>
            <div className="card-body">
              <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                <div className="step completed">
                  <div className="step-icon-wrap">
                    <div className="step-icon">
                      <i className="pe-7s-cart" />
                    </div>
                  </div>
                  <h4 className="step-title">Đã đặt đơn</h4>
                </div>
                <div className="step completed">
                  <div className="step-icon-wrap">
                    <div className="step-icon">
                      <i className="pe-7s-config" />
                    </div>
                  </div>
                  <h4 className="step-title">Xác nhận đơn hàng</h4>
                </div>
                <div className="step completed">
                  <div className="step-icon-wrap">
                    <div className="step-icon">
                      <i className="pe-7s-medal" />
                    </div>
                  </div>
                  <h4 className="step-title">Kiểm tra hàng</h4>
                </div>
                <div className="step">
                  <div className="step-icon-wrap">
                    <div className="step-icon">
                      <i className="pe-7s-car" />
                    </div>
                  </div>
                  <h4 className="step-title">Đang vận chuyển</h4>
                </div>
                <div className="step">
                  <div className="step-icon-wrap">
                    <div className="step-icon">
                      <i className="pe-7s-home" />
                    </div>
                  </div>
                  <h4 className="step-title">Đã giao thành công</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* vi tri don hang */}
      <div className="vitr">
        <div className="card mb-3">
          <div className="part">
            <div className="part_1">
              <h3>Thông tin giao hàng:</h3>
              <h4>Họ tên: {nv.ten_nv}</h4>
              <span>SĐT: {nv.sdt}</span> <br />
              <span>Địa chỉ: Đại học Vinh</span>
            </div>
            <div className="verticalLine"></div>
            <div className="part_2">
              <div className="stepp">
                <h5 className="step-title">Đơn đang ở: Kho HN</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
