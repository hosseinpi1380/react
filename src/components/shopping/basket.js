import React, { Component } from 'react'
export default class Basket extends Component {
    constructor(props) {
        super(props)
    }
    removeHandler(product){
        this.props.onRemove(product)
    }
    render() {
        return (
            <tr className='my-2 border-b-2 border-black'>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td className='flex justify-center'>
                    <img src={this.props.src} alt="" className='w-10 h-10' />
                </td>
                <td>
                    <button onClick={this.removeHandler.bind(this,this.props)} className='bg-red-700 px-4 py-2 rounded-full text-white'>remove</button>
                </td>
            </tr>
        )
    }
}
