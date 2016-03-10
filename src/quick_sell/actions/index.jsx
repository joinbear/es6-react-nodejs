import fetch from 'isomorphic-fetch';


// ===============定义同步actions和actions函数==========================

export const SAVE_REPORT = 'SAVE_REPORT'
export const CLOSE_REPORT = 'CLOSE_REPORT'

export function fullReport() {
  return {
    type: SAVE_REPORT,
    user: '顾彬'
  }
}

export function cancelReport() {
  return {
    type: CANCEL_REPORT
  }
}


// ===============定义异步actions和actions函数===========================

export const RECEIVED_QUICKSELL_INITDATA = 'RECEIVED_QUICKSELL_INITDATA'

export function requestQuickSellType() {
  return (dispatch) => {
    return fetch('/src/examples/data.json')
      .then(resp => resp.json())
      .then(json => dispatch(receivedQuickSellType(json)))
  }
}

function receivedQuickSellType(quicksellTypes) {
  const { sellType, creditType, documentType ,regin } = quicksellTypes
  return {
    type: RECEIVED_QUICKSELL_INITDATA,
    sellTypes: sellType,
    creditTypes: creditType,
    docTypes: documentType,
    regin: regin
  }
}

