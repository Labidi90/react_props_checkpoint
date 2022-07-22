import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Profile from "./profile/Profile";
import img from "./img.jpg";

function App() {
  const handleName = (profileName) => {
    alert(`my name is ${profileName}`);
  };

  return (
    <div className="App">
      <Profile
        showName={handleName}
        name="Abidi Mohamed"
        profession="Fullstack Developer"
        bio="Recent computer science graduate with a passion for developing scalable web applications and working across the full stack. I am looking to join forces with Red Technologies to continue to grow my skill set while contributing to the positive outcome of making people richer smarter and happier."
      >
        <img src={img} alt="profile picture" />
      </Profile>
    </div>
  );
}

export default App;
