import { useContext } from "react";
import DateTimeContext from "../context/datetimecontext";

function Clock(props) {

    const dateTimeContext = useContext(DateTimeContext);

    let unix_dec = Math.floor(dateTimeContext.date.getTime() / 1000);
    let unix_hex8 = unix_dec.toString(16).toUpperCase();
    let unix_hex6 = unix_hex8.substring(unix_hex8.length - 8, 6);
    let alpha = unix_dec % 256;

    let bgColor = {
        backgroundColor: `#${unix_hex8}`,
    };

    let fwColor = {
        color: (alpha > 125) ? `#FFF` : `#${unix_hex6}FF`,
    };

    return (
        <div style={bgColor} className="clock">
            <div style={fwColor} className='colorCode'><span>#{unix_hex8}</span></div>
            <div style={fwColor} className='getTime'><span>{dateTimeContext.date.toLocaleString()}</span></div>
        </div>
    );
}

export default Clock;