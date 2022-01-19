import React from "react";

export default function Header() {
  const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };
  return (
    <div className="topnav">
      <button className="openbtn" onClick={() => openNav()}>
        ☰
      </button>
      <div className="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    </div>
  );
}
