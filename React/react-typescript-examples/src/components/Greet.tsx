type GreetProps = {
    name: string,
    noOfMessages: number,
    isLoggedIn: boolean
}
const Greet = (props: GreetProps) => {// types of props should be defined
    return <div>{props.isLoggedIn ? `Hey ${props.name}, You have ${props.noOfMessages} unread messages` : `Welcome Guest`}</div>
}

export default Greet