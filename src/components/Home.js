import { Wrapper, Button } from "./Home.styles";

const Home = ({ start }) => {
    return (
        <Wrapper className="home-wrapper">
            <Button onClick={start}>Start</Button>
        </Wrapper>
    );
};

export default Home;
