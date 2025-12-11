import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

interface ShoppingCartPageProps {
  onNavigate: (page: 'products' | 'cart') => void;
}

const ShoppingCartPage = ({ onNavigate }: ShoppingCartPageProps) => {
  const { cart, getTotalItems, getTotalCost } = useCart();

  const totalItems = getTotalItems();
  const totalCost = getTotalCost();

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be implemented.');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header currentPage="cart" onNavigate={onNavigate} />

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Total Cart Amount: ${totalCost}
          </h1>
        </div>

        {cart.length > 0 && (
          <div className="mb-8">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}

        <div className="flex flex-col items-center gap-4 mt-12">
          <button
            onClick={() => onNavigate('products')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-12 py-3 rounded-md transition-colors duration-200 w-64"
          >
            Continue Shopping
          </button>

          <button
            onClick={handleCheckout}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-12 py-3 rounded-md transition-colors duration-200 w-64"
          >
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCartPage;
