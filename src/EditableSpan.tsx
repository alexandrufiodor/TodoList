import React, {ChangeEvent, useState} from "react";
import {TextField} from "@material-ui/core";

type EditableSpanPropsType = {
    title: string,
    onChange: (title: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    let [title, setTitle] = useState('');
    let [editMode, setEditMode] = useState<boolean>(false);

    const activateEditMode = ( ) => {
        setEditMode(true)
        setTitle(props.title)
    }
    const activateViewMode = ( ) => {
        setEditMode(false)
        props.onChange(title)
    }
    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    return (
        editMode ? <TextField variant = {"outlined"} value={title} onBlur={activateViewMode} onChange={onChangeHandle} autoFocus /> : <span onDoubleClick={activateEditMode} >{props.title}</span>
    )
}