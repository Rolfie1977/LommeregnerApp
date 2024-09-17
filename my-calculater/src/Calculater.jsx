import React, { useState } from "react";
import "./Calculater.module.scss";

function Calculator() {
	// Definerer state-variabler
	const [displayValue, setDisplayValue] = useState("0");
	const [firstValue, setFirstValue] = useState(null);
	const [operator, setOperator] = useState(null);
	const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

	// Resten af funktionerne er de samme som før

	// ... (handleNumberClick, handleOperatorClick, calculate, handleEqualClick, handleClearClick)

	// JSX til at rendere lommeregnerens brugergrænseflade
	return (
		<div className="calculator">
			<div className="display">{displayValue}</div>
			<div className="button-grid">
				<button onClick={handleClearClick}>AC</button>
				<button onClick={() => handleOperatorClick("/")}>÷</button>
				<button onClick={() => handleOperatorClick("*")}>×</button>
				<button onClick={() => handleOperatorClick("-")}>−</button>

				{[7, 8, 9].map((number) => (
					<button key={number} onClick={() => handleNumberClick(number)}>
						{number}
					</button>
				))}

				<button onClick={() => handleOperatorClick("+")}>+</button>

				{[4, 5, 6].map((number) => (
					<button key={number} onClick={() => handleNumberClick(number)}>
						{number}
					</button>
				))}

				{[1, 2, 3].map((number) => (
					<button key={number} onClick={() => handleNumberClick(number)}>
						{number}
					</button>
				))}

				<button onClick={handleEqualClick}>=</button>

				<button onClick={() => handleNumberClick(0)}>0</button>
			</div>
		</div>
	);
}

export default Calculator;
