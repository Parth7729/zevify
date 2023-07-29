import { FC } from 'react';
import { Product } from '../../../interfaces/interfaces';
import "./FilterPane.css"


const FilterPane: FC<{productTypes:string[], handleTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void, handleRatingChange: (event: React.ChangeEvent<HTMLInputElement>) => void}> = ({productTypes, handleTypeChange, handleRatingChange}) => {
    return (
        <div className="filter-pane">
            <div className="filter-type">
                <h4>Type</h4>
                { productTypes.map((productType: string, id: number) => {
                    return (
                        <div key={id}  >
                            <input type="checkbox" name={productType} value={productType} onChange={(event) => handleTypeChange(event)} />
                            <p>{productType}</p>
                        </div>
                    )
                }) }
            </div>


            <div className="filter-type">
                <h4>Rating</h4>
                <div>
                    <input type="checkbox" value={1} onChange={(event) => handleRatingChange(event)} />
                    <p>⭐</p>
                </div>
                <div>
                    <input type="checkbox" value={2} onChange={(event) => handleRatingChange(event)} />
                    <p>⭐⭐</p>
                </div>
                <div>
                    <input type="checkbox" value={3} onChange={(event) => handleRatingChange(event)} />
                    <p>⭐⭐⭐</p>
                </div>
                <div>
                    <input type="checkbox" value={4} onChange={(event) => handleRatingChange(event)} />
                    <p>⭐⭐⭐⭐</p>
                </div>
                <div>
                    <input type="checkbox" value={5} onChange={(event) => handleRatingChange(event)} />
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
            </div>

        </div>
    )
}

export default FilterPane;