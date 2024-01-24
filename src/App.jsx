import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/home'
import Footer from './components/Footer'
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
