export const useTheme = (key = '') => {
    return (theme: string) => {
        document.documentElement.setAttribute(key, theme);
    }
}