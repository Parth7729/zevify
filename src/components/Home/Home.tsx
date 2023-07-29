import { FC } from "react";
import Search from "../Search/Search";
import { Product, Trending } from '../../interfaces/interfaces';
import data from '../../models/models.json'

interface Props {
    
}

const Home: FC<Props> = () => {
    return <Search data={data} />
}


export default Home;