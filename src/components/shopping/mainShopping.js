// import React, { Component, useState  } from 'react'
// import Shopping from './shopping'
// import Basket from './basket';
// export default class MainShopping extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             product: [
//                 { id: 1, name: 'shirt', src: './img/nat-10.jpg', price: '4$', amount: 0 },
//                 { id: 2, name: 'mobile', src: './img/nature1.jpg', price: '4$', amount: 0 },
//                 { id: 3, name: 'laptop', src: './img/nature2.jpg', price: '4$', amount: 0 },
//                 { id: 4, name: 'tv', src: './img/nature3.jpg', price: '4$', amount: 0 },
//                 { id: 5, name: 'pc', src: './img/nav-img-1.jpeg', price: '4$', amount: 0 },
//                 { id: 6, name: 'pizza', src: './img/gallery-img-3.jpeg', price: '4$', amount: 0 },
//             ],
//             basket: []
//         }
//     }
//     addProductToBasket(element) {
//         this.setState((prevState) => {
//             return {
//                 basket: [...prevState.basket, element]
//             }
//         })
//     }
//     removeProduct(element) {
//         console.log(element);
//         let findProduct = this.state.basket.filter(el => el.id != element.id);
//         console.log(findProduct);
//         this.setState({
//             basket: findProduct
//         })
//     }
//     render() {
//         return (
//             <>
//                 <h1 className='my-4 uppercase font-semibold'>shopping Basket</h1>
//                 <div className="container flex flex-row flex-wrap gap-4 py-20 w-4/5 mx-auto justify-center">
//                     {this.state.product.map(pro => <Shopping key={pro.id} {...pro} onAddToBasket={(element) => this.addProductToBasket(element)} />)}
//                 </div>
//                 <div className="basket bg-slate-300 w-4/5 mx-auto">
//                     <h1 className='text-center uppercase font-semibold font-mono'>welcome to your basket!:🥰🥰🥰</h1>
//                     <table className='my-5 table-fixed w-full text-center uppercase'>
//                         <thead className='py-2'>
//                             <tr>
//                                 <td>title</td>
//                                 <td>price</td>
//                                 <td>img</td>
//                                 <td>event</td>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.state.basket.map(sho => <Basket key={sho.id} {...sho} onRemove={(element) => this.removeProduct(element)} />)}
//                         </tbody>
//                     </table>
//                 </div>
//             </>
//         )
//     }
// }
import React, { useState } from 'react'
import Basket from './basket';
import Shopping from './shopping';
export default function MainShopping() {
    const [product, setProduct] = useState(
        [
            { id: 1, name: 'shirt', src: './img/nat-10.jpg', price: '4$', amount: 0 },
            { id: 2, name: 'mobile', src: './img/nature1.jpg', price: '4$', amount: 0 },
            { id: 3, name: 'laptop', src: './img/nature2.jpg', price: '4$', amount: 0 },
            { id: 4, name: 'tv', src: './img/nature3.jpg', price: '4$', amount: 0 },
            { id: 5, name: 'pc', src: './img/nav-img-1.jpeg', price: '4$', amount: 0 },
            { id: 6, name: 'pizza', src: './img/gallery-img-3.jpeg', price: '4$', amount: 0 },
        ]
    )
    const [basket, setBasket] = useState([]);
    const addProductToBasket = (el) => {
        setBasket(prev => prev = [...prev, el])
    };
    const removeProduct = (element) => {
        setBasket(prev => {
            let findProduct = basket.filter(el => { return el.id !== element.id })
            return findProduct;
        }
        )
    }
    return (
        <>
            <h1 className='my-4 uppercase font-semibold'>shopping Basket</h1>
            <div className="container flex flex-row flex-wrap gap-4 py-20 w-4/5 mx-auto justify-center">
                {product.map(pro => <Shopping key={pro.id} {...pro} onAddToBasket={(element) => addProductToBasket(element)} />)}
            </div>
            <div className="basket bg-slate-300 w-4/5 mx-auto">
                <h1 className='text-center uppercase font-semibold font-mono'>welcome to your basket!:🥰🥰🥰</h1>
                <table className='my-5 table-fixed w-full text-center uppercase'>
                    <thead className='py-2'>
                        <tr>
                            <td>title</td>
                            <td>price</td>
                            <td>img</td>
                            <td>event</td>
                        </tr>
                    </thead>
                    <tbody>
                        {basket.map(sho => <Basket key={sho.id} {...sho} onRemove={(element) => removeProduct(element)} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

