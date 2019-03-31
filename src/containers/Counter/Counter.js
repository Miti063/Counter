import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props._onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props._onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props._onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props._onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props._onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props._onDeleteResult(strResult.id)}>{strResult}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storeResults: state.result.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        _onIncrementCounter : () => dispatch({type: actionType.INCREMENT}),
        _onDecrementCounter : () => dispatch({type: actionType.DECREMENT}),
        _onAddCounter : () => dispatch({type: actionType.ADD, value: 5}),
        _onSubtractCounter : () => dispatch({type: actionType.SUBTRACT, value: 5}),
        _onStoreResult : (result) => dispatch({type: actionType.SHOW_RESULT, value: result}),
        _onDeleteResult: (id) => dispatch({type: actionType.DELETE_RESULT, resultElId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);