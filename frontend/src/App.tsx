import { BitcoinProvider } from './store/bitcoin.store';

function App() {
  return (
    <div>
      <BitcoinProvider>
        <button>Fetch</button>
      </BitcoinProvider>
    </div>
  );
}

export default App;
