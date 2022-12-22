import './App.scss';
import { PageHeader } from './components/PageHeader/Pageheader';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { PageFooter } from './components/PageFooter/PageFooter';

function App() {
  return (
    <div className="App">
        <PageHeader />
        <ItemListContainer />
        <PageFooter />
    </div>
  );
}

export default App;
