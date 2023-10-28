import {UserType} from '../HW8'

type ActionType =
	| { type: 'sort'; payload: 'up' | 'down' }
	| { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
	switch (action.type) {
		case 'sort':  // by name
			if (action.payload === "up") {
				return [...state].sort((a, b) => a.name.localeCompare(b.name));
			} else if (action.payload === "down") {
				return [...state].sort((a, b) => b.name.localeCompare(a.name));
			}
			// ? : тернарник
			// return action.payload === 'up'
			// 	? [...state].sort((a, b) => a.name.localeCompare(b.name))
			// 	: action.payload === 'down'
			// 		? [...state].sort((a, b) => b.name.localeCompare(a.name))
			// 		: state;
			break;
		case 'check': {
			return state.filter((el) => el.age >= 18);
			// фильтрация + сортировка по возрастанию
			// return state.filter((el) => el.age >= 18).sort((a, b) => a.age - b.age);
		}
		default:
			return state
	}
	return state
}
