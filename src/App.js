import './App.css';
import styled from 'styled-components'


import Title from './components/Title'
import Flex from './components/Flex'
import Console from './components/Console'
import Button from './components/Button'

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
`


function App() {
  return (
    <AppWrapper>
      <Flex justify = "center" >
         <Title  size = "48px" >Console cmd 2021. ARMilyutina</Title>
      </Flex>

      <Flex direction = "column">
        <Console />
        <Button  outlined align = "flex-end"> Resent </Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
