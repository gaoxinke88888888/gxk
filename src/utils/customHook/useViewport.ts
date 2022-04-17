import { ref, onMounted, onUnmounted } from 'vue';

export const MOBILE = 'MOBILE'
export const TABLET = 'TABLET'
export const DESKTOP = 'DESKTOP'

export const useViewport = (config = {}) => {
    // @ts-ignore
    const { mobile = null, tablet = null } = config;
    let mobileWidth = mobile ? mobile : 768;
    let tabletWidth = tablet ? tablet : 922;
    let device = ref(getDevice(window.innerWidth));
    function getDevice(width: number) {
        if (width < mobileWidth) {
            return MOBILE;
        } else if (width < tabletWidth) {
            return TABLET;
        }
        return DESKTOP;
    }

    const handleResize = () => {
        device.value = getDevice(window.innerWidth);
    }

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });

    return {
        device
    }
}

//const { device } = useViewport({ mobile: 700, table: 900 });