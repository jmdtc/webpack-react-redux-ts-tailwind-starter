import React from "react";
import { Counter } from "./components/Counter"
import { ReduxCounter } from "./components/ReduxCounter"
import './styles/index.css'

const App: React.FC = () => {
    return (
        <div>
            <h1 className="text-5xl m-8">Welcome to React</h1>
            <div className="flex flex-row justify-between w-1/3 m-8">
                <div className="flex flex-col items-center">
                    <h4 className="mb-4">React State Counter</h4>
                    <Counter />
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="mb-4">Redux Counter</h4>
                    <ReduxCounter />
                </div>
            </div>
        </div>
    )
}

export default App