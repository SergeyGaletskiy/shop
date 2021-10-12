import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Header } from './components/molecules/Header';
import { Footer } from './components/molecules/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect to="./main" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
