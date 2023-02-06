import React from "react";
import Child from "./Child";
class App extends React.Component
{
  constructor()
  {
    super();      
    this.state={name:"ajay",show:true}
    console.log("constructor is running");
  }
  static getDerivedStateFromProps()
  {
    console.log("getDrivedStateFromProps is running");
    return{}
  }
  render()
  {
    console.log("render is running"+this.state.name);
    return(
      <>
      <h1>App component is running {this.state.name}</h1>
      {this.state.show?<Child name='shiva' />:null}
      <button onClick={()=>{
        this.setState({show:false})
      }}>change status</button>
      </>
    )
  }
  componentDidMount()
  {
    this.setState({name:"jay"})
    console.log("componentDidMount is running"+this.state.name);
  }
  shouldComponentUpdate()
  {
    console.log("shouldComponentUpdate is running");
    return true;
  }
  getSnapshotBeforeUpdate(preprops,prestate)
  {
    console.log(prestate);
    console.log("getSnapshotBeforeUpdate is running");
    return {};
  }
  componentDidUpdate()
  {
    console.log("componentDidMount is running");
  }
}
export default App;