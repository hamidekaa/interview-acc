import './App.css';
import InterviewAccord from './components/InterviewAccord';
import data from "./components/helper/data";
function App() {
  return (
    <>
    <div className="header">
   <h2>REACT Interview Questions And Answers</h2>
    </div>
    <div className="app">
      <div className="main">
      <InterviewAccord data={data} />
      </div>
    </div>
    </>
  );
}

export default App;
