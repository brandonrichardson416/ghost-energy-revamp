import './App.css';
import { Home, ProductsPage,ProductDetails, Cart, Stores } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import {ShopContextProvider} from './context/ShopContext';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Footer } from './containers';
import {ScrollToTop} from './components';


function App() {

  const client = new ApolloClient({
    uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clj8qq37m1ihg01ueada8ezle/master",
    cache: new InMemoryCache()
  });
  return (

    <ApolloProvider client={client}>
    <ShopContextProvider>
    <div className="App">
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path ='/products/:paramId' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/stores' element={<Stores/>}/>
        </Routes>
        <Footer/>
        <ScrollToTop/>
      </BrowserRouter>
    </div>
    </ShopContextProvider>
    </ApolloProvider>
  );
}

export default App;
