import React,{Component} from 'react';
class New extends Component{
    render(){
      var data = this.props.b;
      var list = [];
      for(var i=0;i<data.length;i++){
        list.push(<li>{data[i]}</li>);
      }

      return(
        <nav>
         <h1>{this.props.a}</h1>        
          <ul>
              {list}
          </ul>
        </nav>
      );
    }
  }
  export default New;
