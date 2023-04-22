import { useEffect, useState, createContext } from "react";

const DateTimeContext = createContext(new Date(0));

export const DateTimeContextProvider = (props) => {

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNow(() => new Date());
        }, 1000);
        return function () { clearInterval(intervalId) };
    }, [now]);

    return (
        <DateTimeContext.Provider value={
            {
                date: now,
            }
        }>
            {props.children}
        </DateTimeContext.Provider >
    )
}

export default DateTimeContext;
