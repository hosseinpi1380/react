import React, { Component } from 'react'

export default class Reserve extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: [
                { name: 'iran', city: ['tehran', 'shiraz', 'esfahan', 'yazd'] },
                { name: 'usa', city: ['chicago', 'losangeles', 'new youk'] },
                { name: 'saudi arabi', city: ['riaz', 'karbal', 'madine', 'sham'] },
                { name: 'Turkey', city: ['istanbol', 'ankara', 'antaliya', 'ezmir'] },
            ],
            currentCountry: null
        }
    }
    changeHandler(element) {
        let countrySelect = element.nativeEvent.target.value;
        let countryFind = this.state.country.find(country => country.name === countrySelect)
        this.setState({
            currentCountry: countryFind
        })
    }
    render() {
        return (
            <div className="container bg-slate-300 p-10 shadow-md rounded-md">
                <form className='grid grid-cols-2 gap-y-2 gap-x-4 '>
                    <input type="text" className='reserve' placeholder='First Name' />
                    <input type="text" className='reserve' placeholder='Last Name' />
                    <input type="text" className='reserve' placeholder='Phone Number' />
                    <input type="text" className='reserve' placeholder='Email Address' />
                    <select className='uppercase' onChange={(event) => this.changeHandler(event)}>
                        <option>Please select</option>
                        {this.state.country.map((el, index) =>
                            <option key={index} value={el.name}>{el.name}</option>)}
                    </select>
                    <select className='uppercase'>
                        {this.state.currentCountry && (
                            this.state.currentCountry.city.map(city => <option key={city}>{city}</option>)
                        )}
                    </select>
                </form>
            </div>
        )
    }
}
