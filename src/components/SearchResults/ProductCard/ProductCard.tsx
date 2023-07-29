import { FC } from 'react';
import { Product } from '../../../interfaces/interfaces';
import "./ProductCard.css"

const ProductCard: FC<{product: Product}> = ({product}) => {

    return (
        <div className='product-card'>
            <img src={product.productURL} alt="" />
            <p>{ product.productName }</p>
            <p>{ product.productType }</p>
            <p>{ [...Array(product.productRating)].map(() => '⭐') }</p>
            <p>Rs. { product.productActualPrice }</p>
            <p>Rs. { product.productDiscountPrice }</p>

        </div>
    )

}

export default ProductCard;