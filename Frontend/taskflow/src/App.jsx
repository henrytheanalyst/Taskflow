import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import CardArea from "./Components/GridCard";
import ImportantArea from "./Components/ImportantArea";
function App(){
  return(
    <main>
    <Header/>
    <Welcome/>
    <CardArea/>
    <ImportantArea/>
    </main>
  );
}
export default App;