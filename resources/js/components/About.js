import React from 'react';
import { connect } from 'react-redux';


const About = (props) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">About Component</div>
                        <div className="card-body">
                            Last Counter: { props.counter }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    counter: state.counter.counter
});

export default connect(mapStateToProps, null)(About);

