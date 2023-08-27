import React, { Component } from 'react'
export default class user extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allValid: false,
            emailData: '',
            firstnameData: '',
            lastnameData: '',
            submitted: false
        }
    }
    submiteFunc(event) {
        event.preventDefault();
        this.setState({
            submitted: true
        })
        if (this.state.firstnameData && this.state.lastnameData && this.state.emailData) {
            this.setState({
                allValid: true
            })
        }
        else return;
    }
    firstFunc(event) {
        this.setState({
            firstnameData: event.target.value
        })
    }
    lastFunc(event) {
        this.setState({
            lastnameData: event.target.value
        })
    }
    email(event) {
        this.setState({
            emailData: event.target.value
        })
    }
    render() {
        return (
            <div className="container bg-slate-300 shadow-md rounded-md p-10">
                {this.state.allValid && this.state.submitted && (
                    <div className='bg-green-600 text-white px-2 py-3 uppercase rounded-md shadow-lg'>succes! Thanks you for registering! </div>
                )}
                <form className='flex flex-col items-center justify-center' onSubmit={(e) => this.submiteFunc(e)}>
                    <input type="text" placeholder='firstname' value={this.state.firstnameData} onChange={(e) => this.firstFunc(e)} />
                    {this.state.submitted && !this.state.firstnameData && (<label className='text-red-500'>plase fill the input!</label>)}
                    <input type="text" placeholder='lastname' value={this.state.lastnameData} onChange={(e) => this.lastFunc(e)} />
                    {this.state.submitted && !this.state.lastnameData && (<label className='text-red-500'>plase fill the input!</label>)}
                    <input type="text" placeholder='Email' value={this.state.emailData} onChange={(e) => this.email(e)} />
                    {this.state.submitted && !this.state.emailData && (<label className='text-red-500'>plase fill the input!</label>)}
                    <input type="submit" value='register' className='bg-purple-700 w-full text-white uppercase cursor-pointer' />
                </form>
            </div>
        )
    }
}
