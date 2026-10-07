import './App.css'

import { Routes, Route} from 'react-router-dom'

// Components
import Header from '../Header/Header'
import Main from '../Main/Main'
import Spider_Collection from '../Spider_Collection/Spider_Collection'
import About from '../About/About'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className="page">
      <Header />

      {/* ADDED: expanding content wrapper */}
      <div className="page__content">
        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/spider-collection"
            element={<Spider_Collection />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
