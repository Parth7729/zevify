import { FC, useState } from 'react';
import { Product } from '../../../interfaces/interfaces';
import "./ProductCard.css"

const ProductCard: FC<{product: Product}> = ({product}) => {


    const [isWishlist, setIsWishlist] = useState<boolean>(false);

    return (
        <div className='product-card'>
            <div className='img'>
                <div className={`wishlist ${isWishlist ? 'selected' : ''}`} onClick={() => setIsWishlist(!isWishlist)} ><i className={`fa-${isWishlist ? 'solid' : 'regular'} fa-heart`}></i></div>
                <img src={product.productURL} alt="" />
                <div className='view-more'>View More</div>
            </div>
            <p>{ product.productName }</p>
            <p>{ product.productType }</p>
            <p>{ [...Array(product.productRating)].map(() => '⭐') }</p>
            <p>Rs. { product.productActualPrice }</p>
            <p>Rs. { product.productDiscountPrice }</p>

        </div>
    )

}

export default ProductCard;