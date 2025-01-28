interface Product {
  id: number;
  title: string;
  price: number;
  category: {
    name: string;
  };
  images: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="relative group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover object-center"
        />
        <button
          onClick={() => onAddToCart(product)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
        >
          <span className="text-xl">+</span>
        </button>
      </div>
      <div className="mt-4">
        <div className="text-sm text-gray-500">{product.category.name}</div>
        <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
        <p className="text-lg font-bold text-gray-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
