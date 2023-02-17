type ContentProps = {
    children: React.ReactNode
}

export function Content(props: ContentProps){
    return (<div>
        <h1>Master Component</h1>
        {props.children}
        </div>)
}