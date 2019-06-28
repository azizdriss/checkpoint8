import React from "react";
import Bugatti from './Bugatti.jpg';
import Ferrari from './Ferrari.jpg';
import Porsche from './Porsche.jpg'

export default class ChangeButton extends React.Component {
    state = {
        name :'',
        src :'',
        desc :'',
    }
    render(){
        return (<div>
        <center><button onClick ={()=>{this.setState({src: Bugatti,name: 'Bugatti', desc:'tejri barcha (400km/h)'});}}>
        Bugatti</button>,

        <button onClick ={()=>{this.setState({src: Ferrari  ,name:'Ferrari', desc:'mezeyna w classe '});}}>
        Ferrari</button>,

        <button onClick ={()=>{this.setState({src: Porsche  ,name:'Porsche', desc:'haja yesser hlowa'});}}>
        Porsche</button></center>,


    <center><h1>{this.state.name}</h1></center>,
    <center><img src={this.state.src} alt=''/></center>,
    <center><p>{this.state.desc}</p></center>
    </div>
  );
 }
}
