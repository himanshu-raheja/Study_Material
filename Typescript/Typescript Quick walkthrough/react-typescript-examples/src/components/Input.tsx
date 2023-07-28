import React from "react"

type InputProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}
export const Input = (props: InputProps) => {
    return (<input value={props.value} onChange={props.handleChange} />)
}