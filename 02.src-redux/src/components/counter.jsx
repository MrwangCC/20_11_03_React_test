import React, { Component } from 'react';

export default class Counter extends Component {
    componentDidMount() {
        console.log(this.props.increment);
    }

    // 加法
    increment = () => {
        let { value } = this.refs.selectNumber;
        // this.props.store.dispatch(createIncrementAction(value * 1));
        this.props.increment(value * 1);
    }

    // 减法
    decrement = () => {
        let { value } = this.refs.selectNumber;
        // this.props.store.dispatch(createDecrementAction(value * 1));
        this.props.decrement(value * 1)
    }

    incrementIfOdd = () => {
        let { value } = this.refs.selectNumber;
        let { count } = this.props;
        if (count % 2 === 1) {
            // this.props.store.dispatch(createIncrementAction(value * 1));
            this.props.increment(value * 1);
        }
    }

    incrementIfAsync = () => {
        let { value } = this.refs.selectNumber;
        setTimeout(() => {
            // this.props.store.dispatch(createIncrementAction(value * 1));
            this.props.increment(value * 1);
        }, 1000);
    }

    render() {
        // let { count } = this.state;
        // let count = this.props.store.getState();

        return (
            <div>
                <h3>当前计数为：{this.props.count}</h3>
                <select ref="selectNumber">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementIfAsync}>increment if async</button>
            </div>
        )
    }
}