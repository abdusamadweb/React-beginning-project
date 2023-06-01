import './App.scss'

// global styles
import './assets/styles/normalize.css'
import './assets/styles/global.css'

import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import {useLayoutEffect} from "react"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"

const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>

          <Header />

          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>

        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App