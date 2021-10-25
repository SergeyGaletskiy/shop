import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Header } from './components/molecules/Header';
import { AllItems } from './pages/AllItems';
import { MenClothes } from './pages/MenClothes';
import { WomenClothes } from './pages/WomenClothes';
import { Jewelry } from './pages/Jewelry';
import { Electronics } from './pages/Electronics';
import { OtherGoods } from './pages/OtherGoods';
import { SingleItemPage } from './pages/SingleItemPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route component={AllItems} exact path="/" />
          <Route component={MenClothes} exact path="/men" />
          <Route component={WomenClothes} exact path="/women" />
          <Route component={Jewelry} exact path="/jewelry" />
          <Route component={Electronics} exact path="/electronics" />
          <Route component={OtherGoods} exact path="/other" />
          <Route component={SingleItemPage} exact path="/items/:id" />

          <Redirect exact to="./" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
