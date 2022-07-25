// Bootstrap
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// Components
import Header from "./components/Header/Header";
import SocialMedia from "./components/socialMedia/SocialMedia";
function App() {
  return (
    <div className="px-2 px-md-5">
      <Header />
      <SocialMedia />
    </div>
  );
}

export default App;
