import { onMounted, onUnmounted } from 'vue';

export const usePageVisibility = (callback = (documentElement: any) => { }) => {
    let hidden: string, visibilityChange: string;
    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    }
    else { // @ts-ignore
        if (typeof document.mozHidden !== "undefined") {
                hidden = "mozHidden";
                visibilityChange = "mozvisibilitychange";
            } else { // @ts-ignore
            if (typeof document.msHidden !== "undefined") {
                            hidden = "msHidden";
                            visibilityChange = "msvisibilitychange";
                        } else { // @ts-ignore
                if (typeof document.webkitHidden !== "undefined") {
                                            hidden = "webkitHidden";
                                            visibilityChange = "webkitvisibilitychange";
                                        }
            }
        }
    }

    const handleVisibilityChange = () => {
        // @ts-ignore
        callback(document[hidden]);
    }

    onMounted(() => {
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
    });

    onUnmounted(() => {
        document.removeEventListener(visibilityChange, handleVisibilityChange);
    });
}