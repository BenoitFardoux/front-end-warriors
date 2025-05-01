
type props  = {
    text : string,
    link : string
}
const NavbarLink = (props : props) => {
    return (
        <a href={props.link} className="w-full h-full">
        <div className="hover:bg-primary w-full rounded transition duration-150 ease-in-out flex justify-center items-center text-xl">
            <li className="m-2">{props.text}</li>
        </div>
        </a>

    )
}

export default NavbarLink;