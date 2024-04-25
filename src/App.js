import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Sidebar from './components/Sidebar'

import Header from './components/Header'

const App = () => (
  <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </Sidebar>
  </BrowserRouter>
)
export default App
