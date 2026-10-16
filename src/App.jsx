import Repositories from "./components/Repositories.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar/>
      <Profile/>
      <Repositories/>
      <Footer/>
    </div>
  );
}

export default App;