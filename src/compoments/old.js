import React,{Component} from 'react';
class Old extends Component{
    render(){
      var data = this.props.sub;
      var list = [];
      for(var i=0;i<data.length;i++){
        list.push(<li>{data[i]}</li>);
      }
    
      return(
        <nav>
          <h1>{this.props.title}</h1>
          <ul>
              {list}
          </ul>
        </nav>
      );
    }
  }
export default Old;