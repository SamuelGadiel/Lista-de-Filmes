import React from 'react';
import { Link } from 'react-router-dom';

// Cria o Header do site
function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          {/* Logo do site, nesse caso só um nome mesmo */}
          <div className="brand">
            <Link to="/">Lista de Filmes</Link>
          </div>

          <ul className="nav-links">
            {/* Links para cada página do site */}
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
