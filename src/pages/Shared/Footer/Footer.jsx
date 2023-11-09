import logo from '../../../assets/hotello_logo.svg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-400 text-base-content mt-4">
            <aside>
                <img src={logo} alt="" />
                <p className='font-bold'>We always strive for growth and <br />
                development as StylemixThemes.<br /> We don’t want to have a large team,<br />
                we want to have a team that works <br />
                in unity. Our slogan is “Every day is<br />
                the last day”.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav className='font-bold'>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className='font-bold'>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className='font-bold'>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;