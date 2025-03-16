import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";
// FormControl, FormGroup, FormLabel,

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];
    const defaultColor = COLORS[0];
    const [color, setcolor] = useState<string>(defaultColor);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setcolor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>

            <div>
                {/* <FormCheck
                    inline={true}
                    type="radio"
                    name="color"
                    onChange={updateColor}
                >
                    {COLORS.map((color: string) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </FormCheck> */}
                {COLORS.map((color1: string) => (
                    <FormCheck
                        key={color1}
                        inline={true}
                        type="radio"
                        role="radio"
                        name="colors"
                        onChange={updateColor}
                        id={color1}
                        label={color1}
                        value={color1}
                        checked={color1 === color}
                        style={{ backgroundColor: color1 }}
                    >
                        {/* {color1} */}
                    </FormCheck>
                ))}
            </div>

            <h6 data-testid="colored-box" style={{ backgroundColor: color }}>
                you have chosen {color}
            </h6>
        </div>
    );
}
