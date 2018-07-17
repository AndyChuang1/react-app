export const CHANGE = 'CHANGE_COLOR';

export function changecolor(color) {
    return {
        type: CHANGE,
        themeColor: color
    }
};