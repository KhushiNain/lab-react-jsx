import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
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

  render(){
    let dataArr= this.imageData();
    return (
    <div>
      <h1 className="heading">Kalvium Gallary</h1>
      <div className="container">
        {
          dataArr.map((ele)=>{
            return <img key={ele.id} src={ele.img} alt={ele.img}></img>
          })
        }
      </div>

    </div>
    )
  }
}
