import {FC} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import SearchResults from './components/SearchResults/SearchResults';
import Home from './components/Home/Home';
import data from './models/models.json';


const App: FC = () => {


  console.log(data);


  const router = createBrowserRouter([
    {
      path: '',
      element: <Home />
    },
    {
      path: '/:query',
      element: <SearchResults />
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
