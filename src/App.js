import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./conponents/Header";
import Products from "./conponents/Products";
import Detail from "./conponents/Detail";
import GA from "./conponents/GA";
import YoutubePlayer from "./conponents/YoutubePlayer";
import ModalCodePreview from "./conponents/codepreview/ModalCodePreview";


function App() {
    return (
        <>
            <ModalCodePreview/>
            <BrowserRouter>
              <Header/>
                <GA/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/categories/:categoryId" element={<Products/>} />
                    <Route path="/products/:productId" element={<Detail/>} />
                    <Route path="/youtube" element={<YoutubePlayer/>} />
                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;
