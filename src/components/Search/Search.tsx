import React, { FC, useState, ChangeEvent } from "react"
import Suggestions from "./Suggestions/Suggestions";
import { Product, Trending } from '../../interfaces/interfaces';
import { useNavigate } from "react-router-dom";
import "./Search.css";


interface Props {
    data: {
        productsList: Product[];
        trendingProductsList: Trending[];
    }
}

const Search: FC<Props> = ({data}) => {

    const [value, setValue] = useState<string>("");
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleInputValue = (event : ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <div className="search" onFocus={ () => setShowSuggestions(true) } onBlur={ () => setShowSuggestions(false) } >
            <form onSubmit={() => navigate(`/${value}`, {replace: true})}>
                <input type="text" placeholder="Search" value={value} onChange={ handleInputValue } />
                <div className="btn" onClick={() => navigate(`/${value}`, {replace: true})}><i className="fa-solid fa-magnifying-glass"></i></div>
            </form>

            { showSuggestions ? <Suggestions filterValue={value} productsData={data.productsList} trendingProducts={data.trendingProductsList} setShowSuggestions={setShowSuggestions} /> : <></> }

        </div>
    )
}

export default Search;