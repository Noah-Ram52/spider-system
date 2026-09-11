import './App.css'

import { Routes, Route} from 'react-router-dom'

// Components
import Header from '../Header/Header'
import Main from '../Main/Main'
import Spider_Collection from '../Spider_Collection/Spider_Collection'
import Footer from '../Footer/Footer'

function App() {
  return (
      <div className="page">
        <Header />
          <Routes>
            <Route 
              path="/" 
              element={<Main />} 
            />
            <Route 
              path="/spider-collection" 
              element={<Spider_Collection />} 
            />
          </Routes>
          <Footer />
        </div>
      
    )
  }

export default App;
