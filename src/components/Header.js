import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Lista de Filmes</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Lista de Filmes</Link>
            </li>
            <li>
              <Link to="/assistidos">Assistidos</Link>
            </li>
            <li>
              <Link to="/adicionar" className="btn">+ Adicionar</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
