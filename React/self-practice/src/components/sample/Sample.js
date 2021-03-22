import React from 'react'


class Sample extends React.Component{
state={
count:0
}
add = () =>{
this.setState(function(prevState){
return{count: prevState.count+1}
}
)
console.log(this.state.count)
}
render(){
return(
<div className="wrapper"><button onClick={()=>this.add()}>Add</button>
<div><strong>{this.state.count}</strong></div>
</div>
)
}

}

export default Sample;