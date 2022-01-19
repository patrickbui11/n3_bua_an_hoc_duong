import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bgr_1 text-muted">
      {/* Section: Links  */}
      <section className="bgr_1">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                CHĂM SÓC KHÁCH HÀNG
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Hướng dẫn mua hàng
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  {" "}
                  Trả hàng/Hoàn tiền
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Thanh toán
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vận chuyển
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Tải app trên</h6>
              <p>
                <a href="#!" className="text-reset">
                  CH Play
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Apple Store
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Liên Hệ với chúng tôi
              </h6>
              <p>
                <i className="fas fa-home me-3" /> Đại Học Vinh, Nghệ An
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                caohuy377@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3" /> 098738742
              </p>
              <p>
                <i className="fas fa-print me-3" /> 097872383
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: "#EF8030" }}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Nhóm 2
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
}
