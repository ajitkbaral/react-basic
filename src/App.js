import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }

    handleDelete = (counterId) => {
        console.log('Counter id', counterId);
        const counters = this.state.counters.filter(counter => counter.id !== counterId)
        this.setState({ counters })
    }

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0
            return counter
        })
        this.setState({ counters })
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters]
        const index = this.state.counters.indexOf(counter);
        counters[index] = { ...counter }
        counters[index].value += 1
        this.setState({ counters })
    }

    render() {
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(counter => counter.value > 0).length} />
                <main className="container">
                    <Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} />
                </main>
            </React.Fragment>
        );
    }
}

export default App;