
type props  = {
    text : string,
    link : string
}
const NavbarLink = (props : props) => {
    return (
        <li className='hover:bg-primary w-full w px-4 py-2 rounded transition duration-150 ease-in-out'>{props.text}</li>

    )
}

export default NavbarLink;