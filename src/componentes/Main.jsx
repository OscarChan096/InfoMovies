import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Main = () => {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-nav">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html"><img src="./src/assets/logo.png" className="img-size" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="series">Series</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Movies">Movies</Link>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <input id="search" className="form-control me-2" type="search" placeholder="Pelicula"
                                    aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" >Buscar</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div id="alert" className="alert">
                    <label id="text_alert" className="text_alert"></label>
                </div>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Main;
