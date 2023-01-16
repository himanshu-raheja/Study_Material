type PersonListProps = {
    names: {
        fName: string,
        lName: string
    }[]
}

const PersonList = (props: PersonListProps) => {
    return(<div>
        {props.names.map(e => 
        (<div key={e.fName}>{e.fName} {e.lName}</div>)
        )}
    </div>)
}

export default PersonList