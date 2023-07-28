// We can use interface instead of type but it is recommended for application you use type & for building libraries you use type 
type GreetProps = {
    name: string,
    noOfMessages: number,
    isLoggedIn?: boolean
}
const Greet = (props: GreetProps) => {// types of props should be defined
    return <div>{props.isLoggedIn ? `Hey ${props.name}, You have ${props.noOfMessages} unread messages` : `Welcome Guest`}</div>
}

export default Greet

/** 
 * Autocomplete will suggest you the properties defined
 * You can not even assign a wrong prop type from the calling component
*/
 