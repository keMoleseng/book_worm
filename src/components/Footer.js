import styled from "@emotion/styled";

export default function Footer(){
    return (
        <Text>This project was designed and coded by <Anchor href='https://www.linkedin.com/in/moleseng-mokgosi-ab506b11b/'>Moleseng Mokgosi</Anchor></Text>
    )
}

const Text = styled.p`
    position: absolute;
    bottom: 0;
    left: 37%;
    font-size: 0.8rem;
    z-index: 999;
`

const Anchor = styled.a`
    text-decoration: none;
`