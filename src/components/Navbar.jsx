import Logo from "../images/logo.png";

/**
 * The application's persistent navigation bar (used for small screens)
 * @param {{onHamburgerClick: () => void}} props 
 */
const Navbar = (props) =>
{
    return (
        <div
            className="position-sticky bg-dark top-0 start-0 w-100 
            d-flex d-lg-none align-items-center px-4"
            style={{ height:'40px' }}
        >
            <div className="nav-btn" onClick={props.onHamburgerClick}
                style={{ width: '20px', height: '16px', paddingTop: '4px' }}
            >
                <div className="bg-dark w-100" style={{ height:'2px', marginBottom:'4px' }} />
                <div className="bg-dark w-100" style={{height:'2px'}} />
            </div>
            <img src={Logo} alt="Logo" className="ms-4 me-2" height={'28px'} />
            <small>OU GDA BOT</small>
        </div>
    );
}

export default Navbar;