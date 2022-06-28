import React from "react";
import Image from "next/image";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a className="d-flex align-content-center nav-item">
          <Image
            alt="logo"
            src="/logo.png"
            width={100}
            height={50}
          />
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-auto" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">BunnyFesto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Art</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Utilities</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Roadmap</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">FAQ</a>
        </li>

      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Header