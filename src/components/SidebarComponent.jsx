import React from 'react'

export default function SidebarComponent() {
  return (
    <div>
        <section className="sidebar">
          <div className="sidebar__items">
            <div className="logo">
              <p><b>movieapp</b></p>
            </div>
            <div className="sidebar__content">
              {/*<p className="content__title">Menu</p>*/}
              <ul className="list-unstyled sidebar__content--list">
                <li className="menu menu-active">
                  <a href="/">
                    <i className="bi bi-house-door"></i>
                    <span>Home</span>
                  </a>
                </li>
                <li className="menu">
                  <a href="/discovery">
                    <i className="bi bi-folder"></i>
                    <span>Discovery</span>
                  </a>
                </li>
                <li className="menu">
                  <a href="/trending">
                    <i className="bi bi-fire"></i>
                    <span>Trending</span>
                  </a>
                </li>
                <li className="menu">
                  <a href="/topRated">
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>Top Rated</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-divider">
              <hr />
            </div>
            <div className="sidebar__content sidebar__content--second">
              <ul className="list-unstyled sidebar__content--list">
                <li>
                  <a href="/movies">
                    <i className="bi bi-camera-reels"></i>
                    <span>Movies</span>
                  </a>
                </li>
                <li>
                  <a href="/tvshows">
                    <i className="bi bi-fast-forward-circle"></i>
                    <span>TV Shows</span>
                  </a>
                </li>
                <li>
                  <a href="/settings">
                    <i className="bi bi-gear"></i>
                    <span>Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar__footer">
            <div className="sidebar__footer--content">
              <img src="/img/profile.png" alt="" />
              <div className="user__detail">
                <p className="user__detail--name">Login</p>
                <p className="user__detail--email">login@email.com</p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
