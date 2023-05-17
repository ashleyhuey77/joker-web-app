import React from 'react';
import '../../../styles/Sidebar.css';
import {Link} from "react-router-dom";

export function Sidebar() {
  return (
    <>
      <div id="navbar" className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
          <SidebarHeader text="text-white" text_decoration="text-decoration-none" icon="fa-solid fa-face-grin-tongue-wink">
          </SidebarHeader>

          <SidebarContent className="sidebar-content">
          </SidebarContent>

          <SidebarFooter >
          </SidebarFooter>
      </div>
    </>
  );
}

export function SidebarHeader(props) {
  return (
    <>
      <a id="sidebar-header" href="/" className={"d-flex align-items-center mb-3 mb-md-0 me-md-auto " + props.text + " " + props.text_decoration}>
        <i id="header-icon" className={props.icon}>
        </i>
        <span className="fs-4">Joker</span>
      </a>
      <hr />
    </>
  );
}

export function SidebarContent(props) {
  return (
    <>
      <ul className={"nav nav-pills flex-column mb-auto " + props.className}>
        <SidebarMenuItem icon="fa-solid fa-gauge" title="dashboard">Dashboard</SidebarMenuItem>
        <SidebarMenuItem icon="fa-solid fa-sitemap" title="suites">Suites</SidebarMenuItem>
        <SidebarMenuItem icon="fa-solid fa-chart-line" title="metrics">Metrics</SidebarMenuItem>
        <SidebarMenuItem icon="fa-solid fa-bugs" title="problems">Problems</SidebarMenuItem>
      </ul>
    </>
  );
}

export function SidebarMenuItem(props) {
  return (
    <li className="nav-item">
      <div className="nav-link text-white" aria-current="page">
        <i className={props.icon + " sidebar-icons"}>
        </i>
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/${props.title}`}>{props.children}</Link>
      </div>
    </li>
  );
}

export function SidebarFooter() {
  return (
    <>
      <hr />
      <div id="sidebar-footer">
        © 2023 Ash Huey
      </div>
    </>
  );
}
