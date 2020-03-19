import React from 'react';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from '../redux/actions/counterAction';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Home Component</div>

                            <div className="card-body">
                                <h1>Counter: {this.props.counter}</h1>
                                <button onClick={this.props.incrementCounter}>Increment</button>
                                <button onClick={this.props.decrementCounter}>Decrement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.counter
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

