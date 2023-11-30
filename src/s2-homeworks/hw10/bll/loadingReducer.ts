const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): any=> { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": {
            return {
                ...state,
                isLoading: action.isLoading,
            }
        }
       // пишет студент  // need to fix

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}
export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

// type _LoadingActionType = ReturnType<typeof loadingAC>
// export const _loadingAC = (isLoading: boolean) => {
//     return {
//         type: 'CHANGE_LOADING',
//         isLoading
//     } as const
// }


