type PersonListProps = {
    names: {
        firstName: string,
        lastName: string
    }[]
}

const PersonList = (props: PersonListProps) => {
    return(<div>
        {props.names.map(e => 
        (<div key={e.firstName}>{e.firstName} {e.lastName}</div>)
        )}
    </div>)
}

export default PersonList