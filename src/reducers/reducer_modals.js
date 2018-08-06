export default function(state = [], action) {

    switch(action.type) {
        case 'OPEN_MODAL':
            if (state.includes(action.payload)) return state;
            action.payload.modalId = state.length;
            return state.concat(action.payload);
        case 'CLOSE_MODAL':
            return state.filter((modal) => {return modal.modalId !== action.payload.modalId})
    }

    return state;
}
