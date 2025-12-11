import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

type Page = 'landing' | 'products' | 'cart';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const handleGetStarted = () => {
    setCurrentPage('products');
  };

  const handleNavigate = (page: 'products' | 'cart') => {
    setCurrentPage(page);
  };

  return (
    <CartProvider>
      {currentPage === 'landing' && (
        <LandingPage onGetStarted={handleGetStarted} />
      )}
      {currentPage === 'products' && (
        <ProductListingPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'cart' && (
        <ShoppingCartPage onNavigate={handleNavigate} />
      )}
    </CartProvider>
  );
}

export default App;
