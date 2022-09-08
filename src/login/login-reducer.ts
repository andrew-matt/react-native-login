const initialState = {
    isLoggedIn: false,
    isLoading: false,
};

export const loginReducer = (state: InitialStateType = initialState, action: LoginReducerActionTypes): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn};
        case 'login/SET-IS-LOADING':
            return {...state, isLoading: action.isLoading};
        default: {
            return state;
        }
    }
};

//actions
export const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'login/SET-IS-LOGGED-IN', isLoggedIn} as const);
export const setIsLoading = (isLoading: boolean) => ({type: 'login/SET-IS-LOADING', isLoading} as const);

// types
type InitialStateType = typeof initialState

type setIsLoggedInType = ReturnType<typeof setIsLoggedIn>
type setIsLoadingType = ReturnType<typeof setIsLoading>

export type LoginReducerActionTypes = setIsLoggedInType
    | setIsLoadingType
