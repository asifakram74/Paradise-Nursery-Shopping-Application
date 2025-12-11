import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

interface ProductListingPageProps {
  onNavigate: (page: 'products' | 'cart') => void;
}

const ProductListingPage = ({ onNavigate }: ProductListingPageProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header currentPage="products" onNavigate={onNavigate} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category
          );

          return (
            <section key={category} className="mb-12">
              <div className="border-t border-b border-gray-300 py-4 mb-6 w-[30%] mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center">
                  {category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default ProductListingPage;