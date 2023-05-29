import Logo from "../images/logo.png";

const Navbar = () =>
{
    return (
        <div
            className="position-sticky top-0 start-0 w-100 d-flex d-lg-none align-items-center px-4"
            style={{ height: '30px', backgroundColor: '#111214' }}
        >
            <img src={Logo} alt="Logo" className="me-2" height={'20px'} />
            <small>OU GDA BOT</small>
        </div>
    );
}

export default Navbar;