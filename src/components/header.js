import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" className='flex justify-center'>
            <Navbar.Brand >Online Classroom</Navbar.Brand>
        </Navbar>
    );
}

export default Header;