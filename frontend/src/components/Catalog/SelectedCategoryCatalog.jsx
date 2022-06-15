import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useParams } from 'react-router-dom';
import {
  fetchAllItemsRequest,
  fetchCategoriesRequest,
  fetchSelectedCategoryItemsRequest,
} from '../../redux/actions/actionCreators';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const SelectedCategoryCatalog = () => {
  const { categories, catalog, loading, error } = useSelector(
    (state) => state.catalog
  );
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
    dispatch(fetchSelectedCategoryItemsRequest(categoryId));
  }, [dispatch, categoryId]);

  return (
    <>
      <Header />
      <main className='container'>
        <div className='row'>
          <div className='col'>
            <Banner />
            <section className='catalog'>
              <h2 className='text-center'>Каталог</h2>
              <form className='catalog-search-form form-inline'>
                <input className='form-control' placeholder='Поиск' />
              </form>
              <ul className='catalog-categories nav justify-content-center'>
                <li className='nav-item'>
                  <NavLink
                    to='/catalog.html'
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                  >
                    Все
                  </NavLink>
                </li>
                {categories.map((el) => (
                  <li className='nav-item' key={el.id}>
                    <NavLink
                      to={`/catalog.html/${el.id}`}
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      {el.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className='row'>
                {catalog.map((el) => (
                  <div className='col-4' key={el.id}>
                    <div className='card catalog-item-card'>
                      <img
                        src={el.images[0]}
                        className='card-img-top img-fluid'
                        alt={el.title}
                      />
                      <div className='card-body'>
                        <p className='card-text'>{el.title}</p>
                        <p className='card-text'>{el.price}</p>
                        <Link
                          to='/products/1.html'
                          className='btn btn-outline-primary'
                        >
                          Заказать
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='text-center'>
                <button className='btn btn-outline-primary'>
                  Загрузить ещё
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SelectedCategoryCatalog;
