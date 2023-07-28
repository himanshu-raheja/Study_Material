import React from 'react'

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void
}

export const Button = (props: ButtonProps) => {
    return(<button onClick={(event) => props.handleClick(event, 'UniqueButton')}>
        Click Me
    </button>)
}