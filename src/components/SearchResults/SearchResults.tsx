import { Product, Trending } from "../../interfaces/interfaces";
import Search from "../Search/Search";
import ProductCard from "./ProductCard/ProductCard";
import { FC } from "react";
import data from '../../models/models.json';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import FilterPane from "./FilterPane/FilterPane";
import "./SearchResults.css"
import { pseudoRandomBytes } from "crypto";

interface Props {

}

interface filterItems {
    minPrice: number;
    maxPrice: number;
    productTypes: string[];
    rating: number[];
}

const SearchResults: FC<Props> = () => {

    const getFilteredData = (query: string): Product[] => {
        const lQuery = query.toLowerCase();
        const filteredData: Product[] = data.productsList.filter( (product: Product) => {
            return product.productName.toLowerCase().includes(lQuery);
        } )
        return filteredData;
    }
    const {query} = useParams<{query: string}>();

    const allFilteredProducts = query === 'all' ? data.productsList : getFilteredData(query!);  //all products

    const productTypes: string[] = [];      //productTypes

    allFilteredProducts.map((product: Product) => {
        if(!(productTypes.includes(product.productType))) 
            productTypes.push(product.productType);
    })


    const [totalSelected, setTotalSelected] = useState<number>(0);
    const [filterTypes, setFilterTypes] = useState<string[]>([]);
    const [filterRating, setFilterRating] = useState<number[]>([]);
    const [filterMinPrice, setFilterMinPrice] = useState<number>(0);
    const [filterMaxPrice, setFilterMaxPrice] = useState<number>(0);
    
    const filterApplied = totalSelected !== 0;

    let filteredData = filterApplied ? allFilteredProducts.filter( (product: Product) => {
        if(filterTypes.includes(product.productType)) return true;
        if(filterRating.includes(product.productRating)) return true;
        if(filterMinPrice <= product.productDiscountPrice && filterMaxPrice >= product.productDiscountPrice) return true;
        return false;
    } ) : allFilteredProducts;

    const handleFilterApplied = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked) setTotalSelected(totalSelected+1);
        else setTotalSelected(totalSelected-1);
    }

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const retType = event.target.value;
        if(filterTypes.includes(retType)) {
            const newType = filterTypes.filter( (tempType: string) => tempType !== retType );
            setFilterTypes(newType);
        }
        else {
            const newType = filterTypes;
            newType.push(retType);
            setFilterTypes(newType);
        }
        handleFilterApplied(event);
    }

    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const retRating = Number(event.target.value);
        if(filterRating.includes(retRating)) {
            const newRating = filterRating.filter((tempRating: number) => tempRating !== retRating);
            setFilterRating(newRating);
        }
        else {
            const newRating = filterRating;
            newRating.push(retRating);
            setFilterRating(newRating);
        }
        handleFilterApplied(event);
    }



    return (
        <>
        <Search data={data} />
        <div className="search-result-container">
            <FilterPane productTypes={productTypes} handleTypeChange={handleTypeChange} handleRatingChange={handleRatingChange} />
            <div className="product-card-container">
                { filteredData.map((product, id) => <ProductCard product={product} key={id} />) } 
            </div>
        </div>
        </>
    )
}

export default SearchResults;