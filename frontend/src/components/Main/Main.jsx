import React from 'react';
import Banner from '../Banner/Banner';
import CatalogOnMain from '../CatalogOnMain/CatalogOnMain';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TopSales from '../TopSales/TopSales';

const Main = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <div className='row'>
          <div className='col'>
            <Banner />
            <TopSales />
            <CatalogOnMain />
            {/* <SelectedCategoryCatalog /> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Main;
