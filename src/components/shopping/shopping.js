import React, { Component } from 'react'
export default class Cart extends Component {
    constructor(props) {
        super(props);
    }
    clickBtn(event) {
        this.props.onAddToBasket(event)
    }
    render() {
        return (
            <div key={this.props.id} className='shadow-md rounded-md'>
                <img className='w-80' src={this.props.src} alt="" />
                <div className='flex flex-row justify-around py-4 px-2'>
                    <h1>{this.props.name}</h1>
                    <h2>{this.props.price}</h2>
                    <button className='bg-red-600 text-white py-2 px-4 rounded-full' onClick={this.clickBtn.bind(this, this.props)}>
                        Add to Cart</button>
                </div>
                
            </div>
        )
    }
};
