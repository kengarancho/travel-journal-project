import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import data from './data'

function App() {
  const info = data.map(detail => {
    return (
      <Content 
        img={detail.img}
        detail={detail}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      {info}
    </div>
  );
}

export default App;
