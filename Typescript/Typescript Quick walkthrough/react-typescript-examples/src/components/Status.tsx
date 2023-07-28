// Optional parameter example with defined values
type StatusProps = {
    message: 'Loading' | 'Success' | 'error'
}

export function Status (props: StatusProps) {
    return <div>{props.message}</div>
}