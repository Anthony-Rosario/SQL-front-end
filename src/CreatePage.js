import React, { Component } from 'react'
import { makeSkateboard } from './API-Utils.js';


export default class CreatePage extends Component {

    state = {
        name: '',
        description: '',
        category_id: 1,
        categories: [],
        price: ''
    }

    handleNameChange = (e) => this.setState({ name: e.target.value })

    handlePriceChange = (e) => this.setState({ price: Number(e.target.value) })

    handleDescriptionChange = (e) => this.setState({ description: e.target.value })

    handleCategoryChange = (e) => this.setState({ category_id: Number(e.target.value) })

    handleSubmit = async (e) => {
        e.preventDefault();

        await makeSkateboard(this.state);

        this.props.history.push('/skateboards');
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Description of Board
                        <input value={this.state.description} onChange={this.handleDescriptionChange} />
                    </label>
                    <label> 
                        Price of Board
                        <input value={this.state.price} onChange={this.handlePriceChange} />
                    </label>
                    <label>
                        <select value={this.state.category} onChange={this.handleCategoryChange}>
                        {this.state.categories.map(category => 
                                <option value={category.id} selected={this.state.category_id === category.id}> 
                                    {category.name}
                                </option>)}
                        </select>
                    </label>
                    <button>Create</button>
                </form>
            </div>
        )
    }
}