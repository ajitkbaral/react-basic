import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
    }

    render() {
        const { counter, onIncrement, onDelete } = this.props
        return (
            <div>
                <span className={this.changeBatchStyle()}>{this.formatValue()}</span>
                <button onClick={() => onIncrement(counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
    }

    formatValue() {
        const { value } = this.props.counter
        return value === 0 ? 'ZERO' : value
    }

    changeBatchStyle() {
        let classes = 'badge m-2 badge-'
        classes += this.props.counter.value === 0 ? 'primary' : 'warning'
        return classes
    }

}

export default Counter;