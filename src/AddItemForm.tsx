import React, {ChangeEvent, KeyboardEvent, useState} from "react";

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
            <input value={title}
                   onChange={(e) => {
                       onChangeHandle(e)
                   }}
                   onKeyPress={(e) => {
                       onKeyPressHandle(e)
                   }}
                   className={error ? "error" : ''}
            />
            <button onClick={addTasks}>+</button>
            {error && <div className='error-message'>{error}</div>}
        </div>
    )
}