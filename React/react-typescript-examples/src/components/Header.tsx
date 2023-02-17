type HeaderProps = {
    children: string
}
export const Header = (props: HeaderProps) => {
    return <h2>{props.children}</h2>
}