import logoImg from '../../img/png/png-img.png';
import AotuLogo from '../../img/png/autorithation.png'
import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="header_logo">
                <a href='#' className='header_logo_link'>
                    <img src={logoImg} alt="Logo" className='header_logo_img'/>
                    <h1 className='header_logo_text'>Connect Servise</h1>
                </a>
            </div>
            <div className='header_part2'>
                <div className='header_list'>
                    <div className='header_list_text'>
                        <a href='#' className='header_list_link'>Home</a>
                        <a href='#' className='header_list_link'>Blog</a>
                        <a href='#' className='header_list_link'>Contact</a>
                        <a href='#' className='header_list_link'>About Us</a>  
                    </div>              
                </div>
                <div className='header_autorithation'>
                    <a href='#' className='sing_in'>
                        <p>Sing In / Sing Up</p>
                        <img src={AotuLogo} alt='sds' className='header_autorithation_logo'/>
                    </a>
                </div>
            </div>
        </div>
    );
}

