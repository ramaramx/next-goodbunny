import React from "react";
import Image from "next/image";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'


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
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" 
    aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-auto" id="navbarToggler">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end" style={{textAlign:'center'}}>
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
        <li className="nav-item">
        <a href="#"><Image src="/twitter.png" alt="twitter" width={35} height={35}/></a>
        <a href="#"><Image src="/instagram.png" alt="instagram" width={35} height={35}/></a>
        <a href="#"><Image src="/discord.png" alt="discord" width={35} height={35}/></a>
        <a href="#"><Image src="/discord.png" alt="medium" width={35} height={35}/></a>
        </li>
        <li className="nav-item">
        <a className="d-flex align-content-center nav-item">

          </a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Header

