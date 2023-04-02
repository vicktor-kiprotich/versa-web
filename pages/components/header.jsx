import React from "react";
import NavBar from "./nav_bar";
import ScrollableNav from "./scrollable_nav";
import TopBar from "./top_bar";

export default function Header() {
  return (
    <div className='shadow-md'>
      <TopBar />
      <NavBar />
      <ScrollableNav />
    </div>
  );
}
