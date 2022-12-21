import './App.scss';
import { PageHeader } from './components/PageHeader/Pageheader';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <PageHeader />
        <ItemListContainer />
    </div>
  );
}

export default App;
