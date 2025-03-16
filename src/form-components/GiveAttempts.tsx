import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    // This is the State (Model)
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(3);
    const [attemptsGained, setAttemptsGained] = useState<number>(0);

    function clickUse() {
        setAttemptsRemaining(attemptsRemaining - 1);
    }

    function updateAttempsGained(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsGained(
            parseInt(event.target.value) >= 0 ?
                parseInt(event.target.value)
            :   attemptsGained,
        );
    }

    function clickGain() {
        setAttemptsRemaining(attemptsRemaining + attemptsGained);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <h6>Number of attempts: {attemptsRemaining}</h6>
            <Button onClick={clickUse} disabled={attemptsRemaining < 1}>
                use
            </Button>
            <Button onClick={clickGain}>gain</Button>
            <FormGroup controlId="formAttempsGained">
                <FormLabel>
                    Input Number of Attempts you want to gain below:
                </FormLabel>
                <FormControl
                    placeholder="Enter Number"
                    value={attemptsGained}
                    onChange={updateAttempsGained}
                    type="number"
                ></FormControl>
            </FormGroup>
        </div>
    );
}
