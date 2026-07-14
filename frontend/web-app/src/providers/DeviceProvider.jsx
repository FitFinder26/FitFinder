import { createContext, useContext, useEffect, useState } from "react";


const DeviceContext = createContext();

export function DeviceProvider({ children }) {
    const [device, setDevice] = useState("desktop");

    useEffect(() => {
        // Cache breakpoints to avoid repeated DOM lookups
        const style = window.getComputedStyle(document.documentElement);
        const mobileVal = parseInt(style.getPropertyValue('--mobile')) || 480;
        const tabletVal = parseInt(style.getPropertyValue('--tablet')) || 810;

        const getViewportWidth = () => (
            window.visualViewport?.width ??
            window.innerWidth ??
            window.screen.width
        );

        const updateDevice = () => {
            const width = getViewportWidth();

            if (width <= mobileVal) {
                setDevice("mobile");
            } else if (width <= tabletVal) {
                setDevice("tablet");
            } else {
                setDevice("desktop");
            }
        };

        updateDevice();

        window.addEventListener("resize", updateDevice);
        window.visualViewport?.addEventListener("resize", updateDevice);
        return () => {
            window.removeEventListener("resize", updateDevice);
            window.visualViewport?.removeEventListener("resize", updateDevice);
        };
    }, []);

    return(
        <DeviceContext.Provider value={{ device, setDevice }}>
            {children}
        </DeviceContext.Provider>
    );
}

export const useDevice = () => useContext(DeviceContext);