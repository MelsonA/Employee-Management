import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
           <header className="fixed-top">
            <nav className="navbar navbar-expand-lg bg-primary fixed-top fw-bold">
                    <div className="container">
                        <a className="navbar-brand ms-3 text-white" href="#"><h2>Employee Management</h2></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <ul className="nav nav-pills" id="navmenu">
                            <li className="nav-item px-4">
                              <a className="nav-link text-white fw-bold" href="#">Register</a>
                            </li> 
                          </ul>
                    </div>
                </nav>
            </header> 
        </div>
    )
}

export default HeaderComponent