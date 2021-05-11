import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = React.memo((props: AddItemFormPropsType) => {
    console.log('Add item form ')
    let [title, setTitle] = useState("");
    let [error, setError] = useState<string | null>(null);

    const addTasks = () => {
        if (title.trim() !== '') {
            props.addItem(title);
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandle = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null)
        }
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
            <IconButton onClick={addTasks} color={"primary"}>
                <AddBox/>
            </IconButton>
        </div>
    )
})