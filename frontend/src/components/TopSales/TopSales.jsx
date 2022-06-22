import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopSalesRequest } from '../../redux/features/topSales/topSalesSlice';

const TopSales = () => {
  const { items } = useSelector((state) => state.topSales);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopSalesRequest());
  }, [dispatch]);

  return (
    <>
      <section className='top-sales'>
        <h2 className='text-center'>Хиты продаж!</h2>
        <div className='row'>
          {items.map((el) => (
            <div className='col-4' key={el.id}>
              <div className='card'>
                <img
                  src={el.images[0]}
                  className='card-img-top img-fluid'
                  alt="Босоножки 'MYER'"
                />
                <div className='card-body'>
                  <p className='card-text'>{el.title}</p>
                  <p className='card-text'>{el.price}</p>
                  <a
                    href='/products/1.html'
                    className='btn btn-outline-primary'
                  >
                    Заказать
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopSales;
