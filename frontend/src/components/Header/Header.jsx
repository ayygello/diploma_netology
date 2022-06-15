import React from 'react';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../img/header-logo.png';

const Header = () => {
  return (
    <header className='container'>
      <div className='row'>
        <div className='col'>
          <nav className='navbar navbar-expand-sm navbar-light bg-light'>
            <NavLink to='/' className='navbar-brand'>
              <img src={headerLogo} alt='Bosa Noga' />
            </NavLink>
            <div className='collapase navbar-collapse' id='navbarMain'>
              <ul className='navbar-nav mr-auto'>
                <li
                  className={({ isActive }) =>
                    isActive ? 'nav-item active' : 'nav-item'
                  }
                >
                  <NavLink to='/' className='nav-link'>
                    Главная
                  </NavLink>
                </li>
                <li
                  className={({ isActive }) =>
                    isActive ? 'nav-item active' : 'nav-item'
                  }
                >
                  <NavLink to='/catalog.html' className='nav-link'>
                    Каталог
                  </NavLink>
                </li>
                <li
                  className={({ isActive }) =>
                    isActive ? 'nav-item active' : 'nav-item'
                  }
                >
                  <NavLink to='/about.html' className='nav-link'>
                    О магазине
                  </NavLink>
                </li>
                <li
                  className={({ isActive }) =>
                    isActive ? 'nav-item active' : 'nav-item'
                  }
                >
                  <NavLink to='/contacts.html' className='nav-link'>
                    Контакты
                  </NavLink>
                </li>
              </ul>
              <div>
                <div className='header-controls-pics'>
                  <div
                    data-id='search-expander'
                    className='header-controls-pic header-controls-search'
                  ></div>
                  {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                  <div className='header-controls-pic header-controls-cart'>
                    <div className='header-controls-cart-full'>1</div>
                    <div className='header-controls-cart-menu'></div>
                  </div>
                </div>
                <form
                  data-id='search-form'
                  className='header-controls-search-form form-inline invisible'
                >
                  <input className='form-control' placeholder='Поиск' />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
