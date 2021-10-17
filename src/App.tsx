import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Header } from './components/molecules/Header';
import { Footer } from './components/molecules/Footer';
import { AllClothes } from './pages/AllClothes';
import { MenClothes } from './pages/MenClothes';
import { WomenClothes } from './pages/WomenClothes';
import { Jewelry } from './pages/Jewelry';
import { Electronics } from './pages/Electronics';
import { OtherGoods } from './pages/OtherGoods';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <AllClothes /> */}
        <Switch>
          <Route component={AllClothes} exact path="/" />
          <Route component={MenClothes} exact path="/men" />
          <Route component={WomenClothes} exact path="/women" />
          <Route component={Jewelry} exact path="/jewelry" />
          <Route component={Electronics} exact path="/electronics" />
          <Route component={OtherGoods} exact path="/other" />
          <Redirect to="./" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
