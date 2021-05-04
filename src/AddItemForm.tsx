import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import { IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemFormPropsType = {
    id: string
    addTask: (title: string, id: string) => void
}

export const AddItemForm = (props: AddItemFormPropsType) => {
    let [title, setTitle] = useState("");
    let [error, setError] = useState<string | null>(null);

    const addTasks = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim(), props.id);
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandle = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTasks()
        }
    }

    return (
        <div>
            <TextField variant={"outlined"}
                       error={!!error}
                       value={title}
                       onChange={onChangeHandle}
                       onKeyPress={onKeyPressHandle}
                       label={"Title"}
                       helperText={error}
            />
            <IconButton onClick={addTasks}  color={"primary"}>
                <AddBox/>
            </IconButton>
        </div>
    )
}