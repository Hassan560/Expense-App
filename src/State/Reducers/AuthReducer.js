import ActionTypes from "../Constants"

const InitialState = {
    userName: '',
    userEmail: '',
    userPassword: ''
}

const AuthReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ActionTypes.SIGN_UP:
            return {
                ...state,
                userName: action.payload.name,
                userEmail: action.payload.email,
                userPassword: action.payload.password,
            }
        case ActionTypes.SIGN_IN:
            return {
                ...state,
                userEmail: action.payload.email,
                userPassword: action.payload.password
            }
        case ActionTypes.GOOGLE_SIGN_IN:
            return {
                ...state,
                userEmail: action.payload,
                userPassword: action.payload
            }
        case ActionTypes.FACEBOOK_SIGN_IN:
            return {
                ...state,
                userEmail: action.payload.email,
                userPassword: action.payload.password
            }
        case ActionTypes.SIGN_OUT:
            return {
                ...state,
                userName: '',
                userEmail: '',
                userPassword: ''
            }
        default:
            return state
    }
}

export default AuthReducer