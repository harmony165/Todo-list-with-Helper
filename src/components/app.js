import React, {Component} from 'react';

// Bootstrap for react
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';


class App extends Component {
constructor(props) {
	super(props);


	this.state = {
	userInput : "",
    list:[],
    help:false,
    try: ""
	}
}


updateInput(value){
	this.setState({
	userInput: value,
	});
}

addItem(event){
	if(event.keyCode == 13){
		if(this.state.userInput !== '' ){
			const userInput = {
		
				
				id : Math.random(),
		
				
				value : this.state.userInput
			};
		
		
			const list = [...this.state.list];
			list.push(userInput);
		
			this.setState({
				list,
				userInput:""
			});
			}
	}
	
}


deleteItem(key){
	const list = [...this.state.list];

	
	const updateList = list.filter(item => item.id !== key);


	this.setState({
	list:updateList,
	});

}

helpMe(){
    const list = [...this.state.list];
    const random = Math.floor(Math.random() * list.length);
    console.log(random);
    const tryit = list[random].value;
    this.setState({
        help:true,
        try:tryit
    });
    


}



render(){
    let helpTab = null;
    if(this.state.help){
    helpTab = <div>Maybe try to...{this.state.try}</div>
    }

	return(<Container>

		<Row style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				fontSize: '3rem',
				fontWeight: 'bolder',
				}}
				>TODO LIST
			</Row>

		<hr/>
		<Row>
		<Col md={{ span: 5, offset: 4 }}>

		<InputGroup className="mb-3">
		<FormControl
			placeholder="add item . . . "
			size="lg"
			value = {this.state.userInput}
			onChange = {item => this.updateInput(item.target.value)}
			aria-label="add something"
			aria-describedby="basic-addon2"
			onKeyDown={(event)=>this.addItem(event)}
		/>
		<InputGroup.Append>
			<Button
			variant="dark"
			size="lg"
			onClick = {()=>this.addItem()}
			>
			ADD
			</Button>
            <Button
			variant="light"
			size="lg"
			onClick = {()=>this.helpMe()}
			>
			Help me !
			</Button>
            
            

		</InputGroup.Append>
		</InputGroup>
        {helpTab}

	</Col>
</Row>
<Row>
	<Col md={{ span: 5, offset: 4 }}>
		<ListGroup>
		{/* map over and print items */}
		{this.state.list.map(item => {return(

			<ListGroup.Item variant="dark" key={item.id} action
			onClick = { () => this.deleteItem(item.id) }>
			{item.value}
			</ListGroup.Item>

		)})}
		</ListGroup>
	</Col>
</Row>
	</Container>
	);
}
}

export default App;
