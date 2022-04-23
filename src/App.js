

import Navbar from "./components/Navbar";
import Router from "./components/Router";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="App grid grid-cols-12 h-[100vh] overflow-hidden">
      <div className="col-span-2">
        <Sidebar/>
      </div>
      <div className="bg-[#161722] col-span-10 text-white">
        <Navbar/>
        <Router/>
      </div>
    </div>
  );
}
export default App;
