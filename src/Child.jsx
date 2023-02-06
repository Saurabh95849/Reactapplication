import React from "react";
class Child extends React.Component
{
    constructor()
    {
        super();
        this.state={name:'rahul'}
    }
    static getDerivedStateFromProps(props)
    {
        return{name:props.name}
    }
    render()
    {
        return(<>
            <h1>Child Component is running {this.props.name}</h1>
            </>)
    }
    componentDidMount()
    {
        return{}
    }
    componentWillUnmount()
    {
        console.log("componentWillUnmount is running");
    }
}
export default Child;