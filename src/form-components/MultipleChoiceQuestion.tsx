import React, { useState } from "react";
import { FormGroup, FormLabel, FormSelect } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const defaultChoice = options[0];
    const [userAnswer, setUserAnswer] = useState<string>(defaultChoice);

    // Use <HTML "Select" Element>, NOT <HTML "Input" Element>
    function updateUserAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <FormGroup controlId="Answers">
                <FormLabel>Select an Answer below:</FormLabel>
                <FormSelect value={userAnswer} onChange={updateUserAnswer}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </FormSelect>
            </FormGroup>
            The answer is: {userAnswer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
