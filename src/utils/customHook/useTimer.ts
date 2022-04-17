import { ref, onUnmounted } from 'vue';

export const useTimer = (callback = (times: number, number: number) => { }, step = 1000) => {
    let timerVariableId: number | null | undefined = null;
    let times = 0;
    const isPaused = ref(false);

    const stop = () => {
        if (timerVariableId) {
            clearInterval(timerVariableId);
            timerVariableId = null;
            resume();
        }
    }

    const start = () => {
        stop();
        if (!timerVariableId) {
            times = 0;
            timerVariableId = setInterval(() => {
                if (!isPaused.value) {
                    times++;
                    callback(times, step * times);
                }
            }, step)
        }
    }

    const pause = () => {
        isPaused.value = true;
    }

    const resume = () => {
        isPaused.value = false;
    }

    onUnmounted(() => {
        if (timerVariableId) {
            clearInterval(timerVariableId);
        }
    })

    return {
        start,
        stop,
        pause,
        resume,
        isPaused
    }
}

//const handleTimer = (times,number) => {
//   console.log(times,number)
// }
// const {
//   start,
//   stop,
//   pause,
//   resume,
//   isPaused
// } = useTimer(handleTimer,2000);