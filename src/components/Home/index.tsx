import { Container, Content } from './styles';

export function Home() {
    return(
        <Container>
            <Content>
                <div className='title'>
                    <h1>DepthCode</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quis dolore laudantium reprehenderit odit, ex, expedita consectetur deserunt dolorum porro au.</p>
                </div>
                <div className='conjButton'>
                    <button className='btn red'>CONTRATAR</button>
                    <button className='btn const'>CONSULTAR</button>
                </div>

            </Content>
        </Container>
    )
}