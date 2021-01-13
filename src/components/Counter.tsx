import React, { useState } from 'react'

export const Counter: React.FC = () => {
    const [counter, setCounter] = useState<number>(0)
    function handleCounter(action: string): void {
        if (action === "increment") {
            setCounter(counter + 1)
            return
        }
        setCounter(counter - 1)
    }

    return (
        <div className="flex flex-col items-center w-14">
            <div className="flex flex-row justify-center h-8 w-full border border-gray-400">
                <span className="leading-loose align-bottom">
                    {counter}
                </span>
            </div>
            <div className="flex flex-row justify-between w-full">
                <button
                    onClick={() => handleCounter("decrement")}
                    className="w-1/2 border border-gray-400"
                >-</button>
                <button
                    onClick={() => handleCounter("increment")}
                    className="w-1/2 border border-gray-400"
                >+</button>
            </div>
        </div>
    )
}