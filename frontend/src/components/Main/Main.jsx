import React from 'react';
import Banner from '../Banner/Banner';
import Catalog from '../Catalog/Catalog';
// import SelectedCategoryCatalog from '../Catalog/SelectedCategoryCatalog';
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
            <Catalog />
            {/* <SelectedCategoryCatalog /> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Main;
