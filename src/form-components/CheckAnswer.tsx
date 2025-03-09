import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    // This is the state (model)
    const [userAnswer, setUserAnswer] = useState<string>("");

    // This is the Conrtol, where we update the userAnswer with what they input
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    // this is the View, where we display the textbox (FormGroup) and update the userAnswer State when user types.
    return (
        <div>
            {/* <h3>Check Answer</h3> */}
            <FormGroup controlId="formUserAnswer">
                <FormLabel>Input Answer Below:</FormLabel>
                <FormControl
                    value={userAnswer}
                    onChange={updateAnswer}
                ></FormControl>
            </FormGroup>
            {/* The checkmark will display when the userAnswer State matchesthe expectedAnswer, else X */}
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
