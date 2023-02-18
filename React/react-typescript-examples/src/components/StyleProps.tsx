type StyleProp = {
    styles: React.CSSProperties
}

export const StyleProps = (props: StyleProp) => {
    return (<div style={props.styles}>Look at my style</div>)
}