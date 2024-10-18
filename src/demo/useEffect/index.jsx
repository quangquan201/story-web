import { useEffect, useState } from "react";

const DemoUseEffect = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timeId = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        },1000);

        return () => clearInterval(timeId);
    }, []);
    
    return <div>Current time = {time}</div>;
};

export default DemoUseEffect