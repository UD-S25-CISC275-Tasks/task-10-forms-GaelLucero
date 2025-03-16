import React, { useState } from "react";
// import { Button } from "react-bootstrap";
import { FormControl, FormGroup, FormLabel, FormCheck } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            {/* Switch for EditMode */}
            <FormCheck
                // role="switch"
                type="switch"
                id="is-edit-mode"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
                // role="switch" // needed this to manually register this role as switch
            ></FormCheck>
            {/* Make if statement that shows options when on editmode */}
            {editMode ?
                <div>
                    {/* Textbox for user name */}
                    <FormGroup controlId="formUserName">
                        <FormLabel>Name:</FormLabel>
                        <FormControl
                            value={userName}
                            onChange={updateUserName}
                            disabled={!editMode}
                        ></FormControl>
                    </FormGroup>

                    {/* Checkbox for student */}
                    <FormCheck
                        type="checkbox"
                        id="is-student"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    ></FormCheck>
                </div>
            :   <div>
                    <h6>Not in editmode</h6>
                </div>
            }

            <h6>You are in edit mode: {editMode ? "Yes" : "No"}</h6>
            <h6>
                {userName} is {isStudent ? " a student" : " not a student"}
            </h6>
        </div>
    );

    //  (
    //     <div>
    //         <h3>Edit Mode</h3>
    //         {/* Switch for EditMode */}
    //         <FormCheck
    //             type="switch"
    //             id="is-edit-mode"
    //             label="Edit Mode"
    //             checked={editMode}
    //             onChange={updateEditMode}
    //         ></FormCheck>

    //         {/* TextBox for usersName */}
    //         <FormGroup controlId="formUserName">
    //             <FormLabel>Name:</FormLabel>
    //             <FormControl
    //                 value={userName}
    //                 onChange={updateUserName}
    //                 disabled={!editMode}
    //             ></FormControl>
    //         </FormGroup>

    //         {/* CheckBox for isStudent */}
    //         <FormCheck
    //             type="checkbox"
    //             id="is-student"
    //             label="Student?"
    //             checked={isStudent}
    //             onChange={updateIsStudent}
    //         ></FormCheck>

    // <h6>You are in edit mode: {editMode ? "Yes" : "No"}</h6>
    // <h6>
    //     {userName} is {isStudent ? " a student" : " not a student"}
    // </h6>
    //     </div>
    // );
}
