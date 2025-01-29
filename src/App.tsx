import './App.css'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes';
import Navigation from "./navigation";

const AppRoutes = () => useRoutes(routes);

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
