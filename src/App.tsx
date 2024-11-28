import type { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

const App = (): ReactElement => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default App;