import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RawPost from './Components/RawPost/RawPost';
import { HorrorMovies, action, originals } from "./urls"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RawPost url={originals} title='Netflix Orginals' isBig/>
      <RawPost url={action}  title='Action' />
      <RawPost url={action}  title='Action' />
      
      
      
      
    </div>
  )
}


export default App;
