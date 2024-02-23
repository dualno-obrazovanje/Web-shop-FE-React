import React from 'react';
import ProductCard from './ProductCard';
import './style.scss';

const ProductsGrid = ({ products, setProducts, cart, setCart }) => {
    return (
        <div className="gridProduct">
            {products.map((product) =>
                <ProductCard
                    products={products}
                    setProducts={setProducts}
                    cart={cart}
                    setCart={setCart}
                    img={product.img}
                    lager={product.lager}
                    price={product.price}
                    productName={product.name}
                    productType={product.type}
                />
            )}
        </div>
    )
};

export default ProductsGrid;