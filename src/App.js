import db from './data/db.json';
import Home from "./componants/home/Home.js";
function App()
{
  return(
    <Home data={db}/>
  )
}export default App;
