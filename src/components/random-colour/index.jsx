import { useState } from "react"



export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }
    function handleCreateRandomHexColor() {
        //#678765

        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        console.log(hexColor);

    }
    function handleCreateRandomHRgbColor() {

    }

    return (

        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,

        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRgbColor()}>Generate Random Colour</button>
        </div>
    )


}