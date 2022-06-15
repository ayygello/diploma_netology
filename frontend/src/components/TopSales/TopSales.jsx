import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopSalesRequest } from '../../redux/actions/actionCreators';

const TopSales = () => {
  const { items, loading, error } = useSelector((state) => state.topSales);
  const dispatch = useDispatch();
  const [hotSales, setHotSales] = useState([]);

  useEffect(() => {
    dispatch(fetchTopSalesRequest());
  }, [dispatch]);

  // console.log({ items });
  // console.log(hotSales);

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
