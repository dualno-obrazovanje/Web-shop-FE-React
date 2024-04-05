import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import './style.scss';
import { StateContext } from '../../../../state/StateContext';

const ProductsGrid = () => {
    const {products} = useContext(StateContext);
    
    return (
        <div className="gridProduct">
            {products.map((product) =>
                <ProductCard
                    product={product}
                />
            )}
        </div>
    )
};

export default ProductsGrid;