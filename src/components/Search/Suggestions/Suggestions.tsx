import { FC } from "react"
import { Product, Trending } from '../../../interfaces/interfaces';
import './Suggestions.css'
import { Link, useNavigate } from "react-router-dom";


interface Props {
    filterValue: string;
    productsData: Product[];
    trendingProducts: Trending[];
    setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
}

const Suggestions: FC<Props> = ( {filterValue, productsData, trendingProducts, setShowSuggestions} ) => {

    const navigate = useNavigate();

    const filteredData: Product[] = productsData.filter( (product: Product) => {
        const lowerValue = filterValue.toLowerCase();
        return product.productName.toLowerCase().includes(lowerValue);
    } )

    return (
        <div className="suggestions-box" >
            { filteredData.map( (product: Product, id: number) => {
                return <p key={id}> <Link to={`/${product.productName}`}>{ product.productName }</Link> </p>
            } ) }
        </div>
    )
}

export default Suggestions;