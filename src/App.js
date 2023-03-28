import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import CalculatorRoute from './routes/CalculatorRoute';
import Quotes from './routes/Quotes';
import Error from './routes/Error';
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<CalculatorRoute />} />
      <Route path="/Quote" element={<Quotes />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

export default App;
