import {configureStore, createSlice} from "@reduxjs/toolkit";
const operationDue=(operazione, state)=> {
    const secondo = parseFloat(state.tot);
    let result;
    switch (operazione) {
        case 'sum':
            result = state.primo + secondo;
            state.tot = result.toString();
            state.primo=0;
            break;

        case 'subtract':
            result = state.primo - secondo;
            state.tot = result.toString();
            state.primo=0;
            break;

        case 'divided':
            result = state.primo / secondo;
            state.tot = result.toString();
            state.primo=0;
            break;
        case 'multiply':
            result = state.primo * secondo
            state.tot = result.toString();
            state.primo=0;
            break;

        case 'cancel':
            state.tot = "0";
            state.primo = 0;
            state.operazione = "";
            break;

        default:
            throw new Error('Operazione non in elenco.');
    }

}

const calcolaSlice = createSlice({
    name: 'calcolatrice',
    initialState: {tot: "0", primo: 0, operazione: ""},
    reducers: {
        addNumberToDisplay(state, {payload}) {
            let value = payload.Value.toString();
            let tot = parseFloat(state.tot);
            if (state.tot.length === 1 && tot === 0 && !isNaN(payload.Value)){
                state.tot = value;
            }else if (tot=== 0 && value === "0"){
                // state.tot = tot.toString();
            }else {
                let view = state.tot.toString();
                view += value;
                state.tot = view;
            }
        },
        operation(state, {payload}) {

            const value = payload.Value.toString();


            switch (value) {
                case 'cancel':
                    operationDue(value, state);
                    break;
                case 'resolve':
                    if (state.primo !== 0 && state.operazione) {
                        operationDue(state.operazione.toString(), state);
                    }
                    break;
                default:
                    if (state.primo === 0) {
                        state.primo += parseFloat(state.tot);
                    }
                    state.operazione = value;
                    state.tot = "0";
                    break;
            }
        }


    }
})

export const store = configureStore({
    reducer: {
        counterKey: calcolaSlice.reducer
    }
})

export const actions = calcolaSlice.actions;