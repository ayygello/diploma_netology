import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';

const NotFound = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <div className='row'>
          <div className='col'>
            <Banner />
            <section className='top-sales'>
              <h2 className='text-center'>Страница не найдена</h2>
              <p>Извините, такая страница не найдена!</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
