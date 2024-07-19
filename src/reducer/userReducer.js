const initialState = {
    data:[],
    error:{},
    isLoadding:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'Request':
    return { ...state, isLoadding:true }

    case 'UserSuc':
        return { ...state, isLoadding:false,data:payload }

        case 'UserFail':
            return { ...state, isLoadding:false,error:payload }

  default:
    return state
  }
}
