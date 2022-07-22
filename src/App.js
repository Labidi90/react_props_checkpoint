import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import FullName from "./profile/FullName";
import Profession from "./profile/Profession";
import Bio from "./profile/Bio";

function App() {
  return (
    <div className="App">
      <FullName Name="Abidi Mohamed" />
      <Profession profession="FullStack Developer" />
      <Bio bio="Recent computer science graduate with a passion for developing scalable web applications and working across the full stack. I am looking to join forces with Red Technologies to continue to grow my skill set while contributing to the positive outcome of making people richer smarter and happier." />
    </div>
  );
}

export default App;
