import React,{Component} from 'react';
import './App.css';
import New from './compoments/new';
import Old from './compoments/old';

class App extends Component{
  constructor(props){
      super(props);
      this.state={
        mosuhyeok : {french:"멋사 8기"},
        curriculum : {musat:"MUSAT특별과정"},
        likelion : ["모수혁","성은지","박현성"],
        agent : ["이근","김계란","에이전트H"]
      }
    }
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <Old title={this.state.mosuhyeok.french} sub={this.state.likelion}></Old>
        <New a={this.state.curriculum.musat} b={this.state.agent}></New>
      </div>
    );
  }
}

export default App;

