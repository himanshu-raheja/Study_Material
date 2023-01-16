// object types props
type PersonDetailsPropTypes = {
    name: {
        firstName: string,
        lastName: string
    }
}
const PersonDetails = (props: PersonDetailsPropTypes) => {
    return(<div>{props.name.firstName} {props.name.lastName}</div>)
}

export default PersonDetails