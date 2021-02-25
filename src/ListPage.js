import React, { Component } from 'react';
import { getSkateboards } from './API-Utils';
import { Link } from 'react-router-dom';


export default class ListPage extends Component {
    state = {
        skateboards: [],
        loading: false
    }

    componentDidMount = async () => {
        this.setState({
            loading: true
        })

        const skateboards = await getSkateboards();

        this.setState({
            skateboards: skateboards,
            loading: false
        })
    }
    render() {
        return (
            <div className='skateboard'>
                {this.state.skateboards.map(board => <Link to={`/skateboards/${board.id}`} key={board.name}>
                    <div className='skateboard'>
                        <p>{board.name}</p>
                        <p>{board.description}</p>
                        <p>{board.category_id}</p>
                        <p>{board.price}</p>
                    </div>
                </Link>
                )}

            </div>
        )
    }
}
