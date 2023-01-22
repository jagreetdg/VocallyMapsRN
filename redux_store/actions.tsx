import { THEME_CHANGE } from "./constants";

export const switchMode = (mode: any) => {
	return {
		type: THEME_CHANGE,
		payload: mode,
	};
};
