import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
  };
  images: string[];
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-4">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          {product.images[0] && (
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md"
            />
          )}
          <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
          <p className="text-gray-600 mt-1">{product.description}</p>
          <p className="text-green-600 font-bold mt-2">${product.price}</p>
          <p className="text-sm text-gray-500 mt-1">
            Category: {product.category.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Products;
