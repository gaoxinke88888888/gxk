function copyToClipboard(text: string) {
    let input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    let result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}

export const useCopyToClipboard = () => {
    return (text: any) => {
        if (typeof text === "string") {
            return copyToClipboard(text);
        }
        if (typeof text == "number"){
            return copyToClipboard(text.toString());
        }
        return false;
    }
}

//const copyToClipboard = useCopyToClipboard();
// copyToClipboard('just copy');