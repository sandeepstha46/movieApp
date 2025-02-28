import React from 'react'
import {useLocation, useNavigate} from "react-router-dom";

export default function SidebarComponent() {

  const Location = useLocation();

  const menuLists = [
    {id: 0, name: "Home", link: "/", icon: "bi bi-house-door"},
    {id: 1, name: "Discovery", link: "/discovery", icon: "bi bi-folder"},
    {id: 2, name: "Trending", link: "/trending", icon: "bi bi-fire"},
    {id: 3, name: "Top Rated", link: "/topRated", icon: "bi bi-hand-thumbs-up"},
    {id: 4, name: "Movies", link: "/movies", icon: "bi bi-camera-reels"},
    {id: 5, name: "Tv Shows", link: "/tvShows", icon: "bi bi-fast-forward-circle"},
    {id: 6, name: "Settings", link: "/settings", icon: "bi bi-gear"}
  ]

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  }

  return (
    <>
        <section className="sidebar">
          <div className="sidebar__items">
            <div className="logo">
              <p><b>movieapp</b></p>
            </div>
            <div className="sidebar__content">
              {/*<p className="content__title">Menu</p>*/}
              <ul className="list-unstyled sidebar__content--list">
                {menuLists.map((menu) => (
                  <li key={menu.id} className={`menu ${Location.pathname === menu.link ? "menu-active" : ""}`}>
                    <a href={menu.link}>
                      <i className={menu.icon}></i>
                      <span>{menu.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sidebar__footer">
            <div onClick={handleClick} className="sidebar__footer--content">
              <img src="/img/profile.png" alt="" />
              <div className="user__detail">
                <p className="user__detail--name">Login</p>
                <p className="user__detail--email">login@email.com</p>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
