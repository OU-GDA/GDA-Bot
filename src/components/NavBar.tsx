const NavBar = () =>
{
    return (
        <>
            <div
                className="position-fixed top-0 w-100 d-flex px-4 align-items-center"
                style={{ height: '40px', backgroundColor:'#111214' }}
            >
                <div className="me-4" style={{width:'18px'}}>
                    <div className="bg-light-gray w-100" style={{height:'3px'}} />
                    <div className="bg-light-gray w-100" style={{height:'3px', marginTop:'2px', marginBottom:'2px'}} />
                    <div className="bg-light-gray w-100" style={{height:'3px'}} />
                </div>

                <span>OU GDA BOT | DEVELOPER PORTAL</span>
            </div>
        </>
    );
}

export default NavBar;