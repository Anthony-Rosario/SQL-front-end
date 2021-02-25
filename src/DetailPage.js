import React, { Component } from 'react'
import { getSkateboards, getCategories, updateSkateboard} from './API-Utils.js';


export default class DetailPage extends Component {

    state = {
        name: '',
        description: '',
        category_id: 1,
        categories: [],
        price: '',
        owner_id: 1
    }

    componentDidMount = async () => {
        const categories = await getCategories();

        const skateboard = await getSkateboards(this.props.match.params.id);

        this.setState({
            name: skateboard.name,
            description: skateboard.description,
            category_id: skateboard.category_id,
            owner_id: 1,
            categories
        });
    }

    handleNameChange = (e) => this.setState({ name: e.target.value })

    handleDescriptionChange = (e) => this.setState({ description: e.target.value })

    handleCategoryChange = (e) => this.setState({ category_id: Number(e.target.value) })

    handlePriceChange = (e) => this.setState({ price: Number(e.target.value) })

    handleSubmit = async (e) => {
        e.preventDefault();

        await updateSkateboard(this.props.match.params.id, this.state);
        

        this.props.history.push('/skateboards');
    }

    render(){
        console.log(this.state)
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
                    <button>Update</button>
                </form>
            </div>
        )
    }
}
