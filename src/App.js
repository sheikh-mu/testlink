
import NavBar from './Components/Navbar'
import SearchProduct from './Components/SearchProduct'
import Achievements from './Components/Achievements'
import { MapContainer } from './Testing/TestMap';
// import ImageSlider from './Components/ImageSlider';
function App() {
  return (
    <div >
<MapContainer />
<NavBar />  

    <SearchProduct />
      <Achievements />  
       
    
    </div>
  );
}

export default App;
