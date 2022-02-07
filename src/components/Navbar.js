import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/top-headlines'>NewsZilla</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           
                            <li className="nav-item"><Link business className="nav-link active" aria-current="page" to='/business'>Business</Link></li>
                            <li className="nav-item"><Link entertainment className="nav-link active" aria-current="page" to='/entertainment'>Entertainment</Link></li>
                            <li className="nav-item"><Link health className="nav-link active" aria-current="page" to='/health'>Health</Link></li>
                            <li className="nav-item"><Link science className="nav-link active" aria-current="page" to='/science'>Science</Link></li>
                            <li className="nav-item"><Link sports className="nav-link active" aria-current="page" to='/sports'>Sports</Link></li>
                            <li className="nav-item"><Link technology className="nav-link active" aria-current="page" to='/technology'>Technology</Link></li>
                        </ul>   
                        </div>
                    </div>
                    </nav>
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar

