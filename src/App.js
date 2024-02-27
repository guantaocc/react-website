import './App.css';
import Main from './Main/index.tsx';
import Header from './components/Header/index.tsx';

function App() {
  return (
    <div className="App container mx-auto max-w-[1024px]">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
