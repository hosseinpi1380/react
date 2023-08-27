import React, { Component } from 'react'

export default class question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [
                {
                    questionTitle: 'how old are you?', querstionOptions: [
                        { answerText: '22', isCorrect: true },
                        { answerText: '10', isCorrect: false },
                        { answerText: '25', isCorrect: false },
                        { answerText: '32', isCorrect: false }]
                },
                {
                    questionTitle: 'which teams are you fan of?', querstionOptions: [
                        { answerText: 'perspolise', isCorrect: true },
                        { answerText: 'sepahan', isCorrect: false },
                        { answerText: 'esteghlal', isCorrect: false },
                        { answerText: 'tracktor', isCorrect: false }]
                },
                {
                    questionTitle: 'which company of iphon?', querstionOptions: [
                        { answerText: 'apple', isCorrect: true },
                        { answerText: 'sony', isCorrect: false },
                        { answerText: 'sumsung', isCorrect: false },
                        { answerText: 'LG', isCorrect: false }]
                },
                {
                    questionTitle: 'how many brothers and sisters do you have?', querstionOptions: [
                        { answerText: '2', isCorrect: false },
                        { answerText: '1', isCorrect: true },
                        { answerText: '5', isCorrect: false },
                        { answerText: '3', isCorrect: false }]
                },
            ],
            currentQu: 0,
            score: 0,
            showScore: false
        }
    }
    clickBtn(isCorrect) {
        if (isCorrect) {
            this.setState((prev) => {
                return {
                    score: prev.score + 1
                }
            })
        }
        if (this.state.currentQu === 3) {
            this.setState({ showScore: true })
        } else {
            this.setState((prev) => ({ currentQu: prev.currentQu + 1, })
            )
        }

    }
    render() {
        return (
            <>

                {this.state.showScore ?
                    <h1 className='bg-green-600 px-3 py-2 rounded-md shadow-md'>you're score is {this.state.score} of {this.state.questions.length}</h1> :
                    <div className='flex flex-row items-center px-11 w-96 py-2 rounded-md justify-around bg-blue-700 text-white shadow-md'>
                        <h1 className='font-bold uppercase'>{this.state.questions[this.state.currentQu].questionTitle}</h1>
                        <div className="btn__container flex flex-col">
                            {this.state.questions[this.state.currentQu].querstionOptions.map((el, index) =>
                                <button onClick={this.clickBtn.bind(this, el.isCorrect)} className='px-7 py-3 bg-blue-500 text-white my-2 rounded-full shadow-md' key={index}>{el.answerText}</button>)
                            }
                        </div>
                    </div>}


            </>
        )
    }
}
