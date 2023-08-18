import styled from 'styled-components'
import {Button} from './Style/Button'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <img src="./images/startPage.png" alt="" />
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    min-height: 100vh;
    width: 90%;
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    
    img{
        width: 100%;
        max-width: 500px;
    }
    
    .content{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        @media (max-width: 991px) {
            align-items: center;
        }
        h1{
            font-size: 96px;
            text-align: right;
            white-space: nowrap;
            @media (max-width: 991px) {
                text-align: center;
                font-size: 50px;
            }
        }
    }
`