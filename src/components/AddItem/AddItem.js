import React, {Component} from 'react';
import './AddItem.css'

class AddItem extends Component{
    state ={
        name:" ",
        age:" "
    };

    handleChange =(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handelSubmit = (e) => {
        e.preventDefault();
        this.props.item(this.state);
        this.setState({
            name: "",
            age:""
        });
    };
    render(){
        return(
            <div>
                <form onSubmit={this.handelSubmit}>
                    <input type="text"
                    placeholder="Enter name...."
                    onChange={this.handleChange}
                    id="name" 
                    value={this.state.name}/>
                    <input type="number"
                    placeholder="Enter age...."
                    onChange={this.handleChange}
                    id="age"
                    value={this.state.age} />
                    <input type="submit" value="Add Item" />
                </form>
            </div>
        )
    }
}

export default AddItem;