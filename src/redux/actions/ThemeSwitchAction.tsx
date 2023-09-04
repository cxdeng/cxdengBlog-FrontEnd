import {CHANGE_THEME} from "../Constant";

export function handleThemeAction(isDarkMode: boolean) {
    return {type: CHANGE_THEME, data: isDarkMode}
}