import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider, useDispatch, useSelector} from "react-redux";
import {actions, store} from "./store";

function Calcola() {

    return (
        <div className="m-3 p-3">
            <div className="calcola border-black border border-3 p-0 m-auto">
                <Provider store={store}>
                    <CalcolaDisplay/>
                    <div className='align-content-center row p-3'>
                        <Numbers/>
                        <Operations/>
                    </div>
                </Provider>
            </div>
        </div>

    )
        ;
}

function Numbers() {
    const dispatch = useDispatch();
    const buttonNumberClickedEventHandler = (e) => {
        const Value = e.target.value;
        const {addNumberToDisplay} = actions;
        dispatch(addNumberToDisplay({Value}));

    }

    return (<div className='numeri col-9 mx-1 py-3 align-self-center'>
        <button value='7' className='btn btn-secondary btn-lg' onClick={buttonNumberClickedEventHandler}>7</button>
        <button value='8' className='btn btn-secondary btn-lg' onClick={buttonNumberClickedEventHandler}>8</button>
        <button value='9' className='btn btn-secondary btn-lg' onClick={buttonNumberClickedEventHandler}>9</button>
        <button value='4' className='btn btn-secondary btn-lg' onClick={buttonNumberClickedEventHandler}>4</button>
        <button value='5' className='btn btn-secondary btn-lg' onClick={buttonNumberClickedEventHandler}>5</button>
        <button value='6' className='btn btn-secondary btn-lg' onClick={buttonNumberClickedEventHandler}>6</button>
        <button value='1' className='btn btn-secondary btn-lg' onClick={buttonNumberClickedEventHandler}>1</button>
        <button value='2' className='btn btn-secondary btn-lg' onClick={buttonNumberClickedEventHandler}>2</button>
        <button value='3' className='btn btn-secondary btn-lg' onClick={buttonNumberClickedEventHandler}>3</button>
        <button value='0' className='btn btn-secondary btn-lg' onClick={buttonNumberClickedEventHandler}>0</button>
        <button value='.' className='virgola btn btn-secondary btn-lg' onClick={buttonNumberClickedEventHandler}>.</button>
    </div>)
}

function Operations() {

    const dispatch = useDispatch();

    function buttonOperationEventHandler(e) {
        const Value = e.target.value;
        const {operation} = actions;
        dispatch(operation({Value}));
    }

    return (<div className='operazioni col-1 my-1 p-0'>
        <button value='cancel' className='btn btn-secondary btn-lg' onClick={buttonOperationEventHandler}>C</button>
        <button value='divided' className='btn btn-secondary btn-lg' onClick={buttonOperationEventHandler}>/</button>
        <button value='multiply' className='btn btn-secondary btn-lg' onClick={buttonOperationEventHandler}>X</button>
        <button value='subtract' className='btn btn-secondary btn-lg' onClick={buttonOperationEventHandler}>-</button>
        <button value='sum' className='btn btn-secondary btn-lg' onClick={buttonOperationEventHandler}>+</button>
        <button value='resolve' className='btn btn-secondary btn-lg' onClick={buttonOperationEventHandler}>=</button>
    </div>)
}

function CalcolaDisplay() {
    const view = useSelector(state => state.counterKey.tot)
    return (
        <div className='display p-0 py-1 mb-2'>{view}</div>
    );
}

function App() {
    return (
        <div className="container">
            <Calcola/>
        </div>
    );
}

export default App;
