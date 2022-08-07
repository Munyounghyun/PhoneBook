import "./App.css";
import ContactForm from "./component/ContactForm";
import SearchForm from "./component/SearchForm";

function App() {
  return (
    <div className="wrap">
      <h1 className="title">연락처</h1>
      <div className="main">
        <div className="main_section create_form">
          <ContactForm />
        </div>
        <div className="main_section search_form">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default App;
