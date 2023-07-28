import { PersonDetailsUnitProps } from "./PersonDetails.Types"

const PersonDetailsExportTypes = (props: PersonDetailsUnitProps) => {
    return(<div>{props.name.firstName} {props.name.lastName}</div>)
}

export default PersonDetailsExportTypes