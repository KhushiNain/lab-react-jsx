import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  let dataarray=imageData()
  return (
    <div>
    <h1 className="heading">Kalvium Gallary</h1>
    <div className="container">   
    {
      dataarray.map((ele)=>{
        return <img src={`${ele.img}`} ></img>
      })
    }
  </div>
  </div>
  ) 
}

export default App;
