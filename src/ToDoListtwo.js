import { Component } from "react";
import checkedbox from "./checkedbox.jpeg";

export class ToDoListtwo extends Component {
state= {
userinput: '',
todoListtwo: []
}

onChangeEvent(e) {
    this.setState({userinput: e});
    
}

addItem(input) {
    if (input === '') {
        alert('Please put your goal!')
    }else {
    let listArray = this.state.todoListtwo;
    listArray.push(input);
    this.setState({todoListtwo: listArray, userinput: ''})
    
}
}

deleteItem() {
    let listArray = this.state.todoListtwo;
    listArray = [];
    this.setState({todoListtwo: listArray})
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e) {
e.preventDefault();
}


render() {
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
        <div className='container'> 
            <input type='text' 
            placeholder="What's your purpose for today?"
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userinput} />
            
        </div>
        <div className='container'>
        <button onClick={() => this.addItem(this.state.userinput)} className=" btn add">ADD</button>
        </div>
        <ul>
            {this.state.todoListtwo.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                <img src={checkedbox} width='40px' alt='checkedbox'/>
                {item}
                </li>
            ))}
            
        </ul>
        <div className='container'>
        <button onClick={() => this.deleteItem()} className=" btn delete">DELETE</button>
        </div>
        </form>
        </div>
    )
}
}