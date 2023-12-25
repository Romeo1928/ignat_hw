const initState = {
    themeId: 1,
}


export const themeReducer = (state = initState, action: ChangeThemeIdActionType): InitialStateType => { // fix any
    switch (action.type) {
       // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

// action
export const changeThemeId = (id: number): ChangeThemeIdActionType => ({type: 'SET_THEME_ID', id}) // fix any

// types
type InitialStateType = typeof initState

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID',
    id: number
}