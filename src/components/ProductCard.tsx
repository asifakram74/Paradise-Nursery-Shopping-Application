import { Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, cart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="p-4">
        <div className="relative mb-4">
          <h3 className="text-lg font-semibold text-gray-800 text-center mb-3">
            {product.name}
          </h3>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </span>
        </div>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />

        <p className="text-green-600 font-bold text-xl mb-2 text-center">
          ${product.price}
        </p>

        <p className="text-gray-600 text-sm mb-4 text-center line-clamp-2">
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          disabled={isInCart}
          className={`w-full font-semibold py-2 px-4 rounded transition-colors duration-200 ${
            isInCart
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
