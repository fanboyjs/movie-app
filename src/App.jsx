import { useState } from 'react';
import reactLogo from './assets/react.svg';

import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="block">
      <Navbar />
      <div className="App text-3xl font-bold underline text-rose-500">
        Teess
      </div>
    </main>
  );
}

export default App;
