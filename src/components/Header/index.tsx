import logoImg from '../../assets/logo-branco.png';
import { Container } from './styles';

export function Header() {
    return (
        <Container>
                <img src={logoImg} alt="depthCode" />
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
                <div>
                    <a href="#">Bag</a>
                    <a href="#">Next</a>
                </div>
        </Container>
    )
}