'use client';

import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const router = useRouter();
  
  const addToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="relative">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.stock === 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold font-serif">{product.name}</h2>
        <p className="text-gray-600 mt-2 text-sm line-clamp-2">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold">₹{product.price.toFixed(2)}</span>
          <button
            onClick={addToCart}
            disabled={product.stock === 0}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
        {product.stock > 0 && (
          <p className="mt-2 text-sm text-gray-500">
            {product.stock} in stock
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;