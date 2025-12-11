import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentPage: 'products' | 'cart';
  onNavigate: (page: 'products' | 'cart') => void;
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-green-600 text-white py-4 px-6 shadow-md">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-2">
            <Leaf className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Paradise Nursery</h1>
            <p className="text-sm text-green-100">Where Green Meets Serenity</p>
          </div>
        </div>

        <nav className="flex-1 flex items-center justify-center">
          <button
            onClick={() => onNavigate('products')}
            className={`text-3xl font-medium ${
              currentPage === 'products' ? '' : ''
            }`}
          >
            Plants
          </button>
        </nav>

        <div className="flex items-center">
          <button
            onClick={() => onNavigate('cart')}
            className="relative"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-green-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
