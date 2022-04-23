import { Routes, Route } from "react-router-dom";
import Follow from "../page/Follow/Follow";
import Home from "../page/Home/Home";
import New from "../page/New/New";
import Unfinished from "../page/Unfinished";

const Router = () => {
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/follow" element={<Follow/>} />
                <Route path="/news" element={<New/>} />
                <Route path="/live" element={<Unfinished/>} />
                <Route path="/message" element={<Unfinished/>} />
                <Route path="/discover" element={<Unfinished/>} />
                <Route path="/like" element={<Unfinished/>} />
                <Route path="/feedback" element={<Unfinished/>} />
                <Route path="/charts" element={<Unfinished/>} />
            </Routes>
        </div>
     );
}
 
export default Router;