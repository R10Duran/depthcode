import iconInsta from '../../assets/icons/icon-instagram.svg';
import iconWhats from '../../assets/icons/icon-whatsapp.svg';
import iconLink from '../../assets/icons/icon-linkedin.svg';
import { Container } from './styles';

export function Header() {
    return (
        <Container>
                {/* <img src={logoImg} alt="depthCode" /> */}
                <span className='logo'>&lt;DepthCode&frasl;&gt; </span>
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Packs
                    </li>
                    <li>
                        Contacts
                    </li>
                </ul>
                <div className='social'>
                    <a href="#" className='instagram'><img src={iconInsta} alt="Intagram" /></a>
                    <a href="#" className='whatsapp'><img src={iconWhats} alt="Whatsapp" /></a>
                    <a href="#"><img src={iconLink} alt="Linkedin" /></a>
                </div>
        </Container>
    )
}