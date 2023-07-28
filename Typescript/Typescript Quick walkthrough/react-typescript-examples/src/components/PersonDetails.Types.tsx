// import directly from here
// export type PersonDetailsProps = {
//     name: {
//         firstName: string,
//         lastName: string
//     }
// }

// We can break and use it to create other types as well

export type Name = {
    firstName: string,
    lastName: string
}

export type PersonDetailsUnitProps = {
    name: Name
}