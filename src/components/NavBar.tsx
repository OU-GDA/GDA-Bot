import Stamp from "../data/images/stamp.webp";

const NavBar = (props: { onHamburgerMenu: () => void }) =>
{
    return (
        <>
            <div
                className="position-fixed top-0 w-100 d-flex d-lg-none px-4 align-items-center"
                style={{ height:'40px', backgroundColor:'#111214', cursor:'pointer' }}
                onClick={props.onHamburgerMenu}
            >
                <div style={{width:'18px'}}>
                    <div className="bg-light-gray w-100" style={{height:'3px'}} />
                    <div className="bg-light-gray w-100" style={{height:'3px', marginTop:'2px', marginBottom:'2px'}} />
                    <div className="bg-light-gray w-100" style={{height:'3px'}} />
                </div>

                <img src={Stamp} alt="" className="ms-4 me-1" height={'30px'}/>

                <span>OU GDA BOT | DEVELOPER PORTAL</span>
            </div>

            <div className="mb-5 d-block d-lg-none">-</div>
        </>
    );
}

export default NavBar;