import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Api from "./components/Main/Api";
import Footer from "./components/Footer/Footer";

import "./styles/styles.scss";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Api />
      <Footer />
    </div>
  );
}

export default App;
