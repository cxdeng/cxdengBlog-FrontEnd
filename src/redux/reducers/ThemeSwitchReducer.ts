import {CHANGE_THEME} from "../Constant";

const initState: boolean = true

export default function themeSwitchReducer(prevState: boolean = initState, action: { type: string, data: boolean }) {
    const {type, data} = action

    switch (type) {
        case CHANGE_THEME:
            prevState = data
            return prevState
        default:
            return prevState
    }
}