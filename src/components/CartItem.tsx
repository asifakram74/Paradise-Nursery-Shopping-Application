import { Minus, Plus } from 'lucide-react';
import { CartItem as CartItemType } from '../context/CartContext';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const itemTotal = item.price * item.quantity;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex gap-6">
        <img
          src={item.image}
          alt={item.name}
          className="w-32 h-32 object-cover rounded-md"
        />

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {item.name}
          </h3>
          <p className="text-gray-600 mb-4">${item.price}</p>

          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded transition-colors duration-200"
            >
              <Minus className="w-4 h-4" />
            </button>

            <span className="text-lg font-semibold w-8 text-center">
              {item.quantity}
            </span>

            <button
              onClick={handleIncrease}
              className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded transition-colors duration-200"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <p className="text-gray-700 font-semibold mb-4">
            Total: ${itemTotal}
          </p>

          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
