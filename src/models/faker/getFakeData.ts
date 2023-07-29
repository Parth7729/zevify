import { faker } from '@faker-js/faker';
import { Product, Trending } from '../../interfaces/interfaces';

export const getFakeData = (limit: number): Product[] => {

    const data:Product[] = [];

    for(let i = 0; i<limit; i++) {
        const productName: string = faker.commerce.productName();
        const productType: string = faker.commerce.product();
        const productRating: number = faker.number.int({min:1, max:5});
        const num: number = faker.number.int({min:1, max:10});
        const productActualPrice: number = num * 100 + 99;
        const productDiscountPrice: number = faker.number.int({min:0, max:num}) * 100 + 99;
        const productURL: string = faker.image.url();
    
        data.push({
            productName,
            productType,
            productRating,
            productActualPrice,
            productDiscountPrice,
            productURL
        });
    }

    return data;
}

export const getTrendingProductsList = (limit: number): Trending[] => {
    const trendingList: Trending[] = [];

    for(let i = 0; i<limit; i++) {
        const name: string = faker.commerce.productName();
        const imageURL: string = faker.image.url();

        trendingList.push({
            name,
            imageURL
        });
    }

    return trendingList;

}


