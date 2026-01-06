import { createContext, useContext, useEffect, useState } from "react";


const DeviceContext = createContext();

export function DeviceProvider({ children }) {
    const [device, setDevice] = useState("desktop");

    useEffect(() => {
        // 1. Get the breakpoints once at the start to avoid DOM lookups during resize
        const style = window.getComputedStyle(document.documentElement);
        const mobileVal = parseInt(style.getPropertyValue('--mobile'));
        const tabletVal = parseInt(style.getPropertyValue('--tablet'));

        const updateDevice = () => {
            const width = window.innerWidth;
            
            if (width <= mobileVal) {
                setDevice("mobile");
            } else if (width <= tabletVal) {
                setDevice("tablet");
            } else {
                setDevice("desktop");
            }
        };

        // Initial call
        updateDevice();

        window.addEventListener("resize", updateDevice);
        return () => window.removeEventListener("resize", updateDevice);
    }, []);

    return(
        <DeviceContext.Provider value={{ device, setDevice }}>
            {children}
        </DeviceContext.Provider>
    );
}

export const useDevice = () => useContext(DeviceContext);