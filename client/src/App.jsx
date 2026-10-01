import Header from "./assets/components/HEADER/Header"
import Footer from "./assets/components/Footer/Footer"
import Main from "./assets/components/Main/Main.jsx"
import Youtubeapi from "./assets/components/Youtubeapi/Youtubeapi.jsx"
import Mac from "./assets/components/Mac/Mac.jsx"
import Iphone from "./assets/components/Iphone/Iphone.jsx"
import Ipad from "./assets/components/Ipad/Ipad.jsx"
import Watch from "./assets/components/Watch/Watch.jsx"
import Tv from "./assets/components/Tv/Tv.jsx"
import Music from "./assets/components/Music/Music.jsx"
import Support from "./assets/components/Support/Support.jsx"
import Search from "./assets/components/Search/Search.jsx"
import Cart from "./assets/components/Cart/Cart.jsx"
import Four04 from "./assets/components/Four04/Four04.jsx"
import { Route, Routes } from "react-router-dom"
import SharedLayout from "./assets/components/SharedLayout.jsx"

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="Mac" element={<Youtubeapi />} />
          <Route path="Iphone" element={<Iphone />} />
          <Route path="Ipad" element={<Ipad />} />
          <Route path="Watch" element={<Watch />} />
          <Route path="Tv" element={<Tv />} />
          <Route path="Music" element={<Music />} />
          <Route path="Support" element={<Support />} />
          <Route path="Search" element={<Search />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />

        </Route>
      </Routes>

    </>
  )
}

export default App
