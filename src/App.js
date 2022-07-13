import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './Component/Home/Home'
import { Navbar } from "./Component/Navbar/Navbar";
import { Gridd} from './Component/Grid/Grid'
// import { SwipeableTemporaryDrawer } from "./Component/Navbar/Navbar";
// import TemporaryDrawer from "./Component/Navbar/Drawer";
import { Page } from "./Component/Page/Page";

function App() {

  return(
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grid" element={<Gridd />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  )
 
}

export default App;
