
type props  = {
    text : string,
    link : string
}
const NavbarLink = (props : props) => {
    return (
        <div className="hover:bg-primary w-full rounded transition duration-150 ease-in-out flex justify-center items-center">
            <li>{props.text}</li>
        </div>

    )
}

export default NavbarLink;