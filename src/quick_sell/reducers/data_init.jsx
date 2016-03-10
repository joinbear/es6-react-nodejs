import { RECEIVED_QUICKSELL_INITDATA } from '../actions'

const initialState = {
  sellTypes: [],
  creditTypes: [],
  docTypes: [],
  regin : []
}

export default function types(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_QUICKSELL_INITDATA:
      return Object.assign({}, state, {
        sellTypes: action.sellTypes,
        creditTypes: action.creditTypes,
        docTypes: action.docTypes,
        regin: action.regin
      })

    default:
      return state
  }
}
