import { useState } from 'react';
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
`;
const Wrapper = styled.div`
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    margin: 0 auto;
    width: 256px;
    text-align: center;
    border: 2px solid #f2f2f2;
    background: #ffffff;
    border-radius: 10px;
    padding: 10px;
`;
const Input = styled.div`
    height: 75px;
    width: 249px;
    color: #101116;
    border:0px;
    text-align: center;
    font-size: 20px;
    
`;
const TextArea = styled.div`
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-auto-rows: minmax(60px,auto);
`;
const Button = styled.button`
    height: 65px;
    margin: 5px 10px;
    border: none;
    border-radius: 90%;
    background: #f2f2f2;
    color: #333333;
    font-size: 20px;
`;
const Text = styled.span`
    display: block;
    font-size: 10px;
`;
const WordText = styled.span`
    color: rgba(0, 0, 0, 0.87);
    border: none;
    cursor: default;
    height: 32px;
    display: inline-flex;
    outline: 0;
    padding: 0;
    font-size: 0.8125rem;
    box-sizing: border-box;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    align-items: center;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    white-space: nowrap;
    border-radius: 16px;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: #e0e0e0;
    margin: 8px; 
    padding: 8px;
`;


const App =() => {
  const [numbers,setNumber] = useState('');
  const [words,setWords] = useState([]);

  const handleClick = async (numberText) =>{
    if (numberText === "") {
        setWords([]);
        setNumber("");
        return;
      }
    setNumber(numberText);
    const { words } = await retrivewords(numberText);
    setWords((words && words.slice(0,10)) || []);
  }

  const retrivewords = async(numbers) =>{
      const response = await fetch(`http://localhost:5000/api/numbertowords/${numbers}`);
      const body = await response.json();
      if (response.status !== 200) {
        return setWords([]);
      }
      return body;

  }
  
  return (
    <Container >
        <Wrapper>
        <Input>{numbers}</Input>
        <TextArea>
            {words.map((word) =>{
                return (<WordText key={word}>{word}</WordText>)
            })}
        </TextArea>
        <Grid>
            <Button name ="1" onClick={()=>handleClick(`${numbers}${'1'}`)}> 1</Button>
            <Button name ="2" onClick={()=>handleClick(`${numbers}${'2'}`)}>2<Text>ABC</Text></Button>
            <Button name="3" onClick={()=>handleClick(`${numbers}${'3'}`)}>3<Text>DEF</Text></Button>
            <Button name="4" onClick={()=>handleClick(`${numbers}${'4'}`)}>4<Text>GHI</Text></Button>
            <Button name="5" onClick={()=>handleClick(`${numbers}${'5'}`)}>5<Text>JKL</Text></Button>
            <Button name="6" onClick={()=>handleClick(`${numbers}${'6'}`)}>6<Text>MNO</Text></Button>
            <Button name="7" onClick={()=>handleClick(`${numbers}${'7'}`)}>7<Text>PQRS</Text></Button>
            <Button name="8" onClick={()=>handleClick(`${numbers}${'8'}`)}>8<Text>TUV</Text></Button>
            <Button name="9" onClick={()=>handleClick(`${numbers}${'9'}`)}>9<Text>WXYZ</Text></Button>
            <Button >*</Button>
            <Button name="0">0<Text>+</Text></Button>
            <Button onClick={() => handleClick(numbers.slice(0, numbers.length - 1))}>X<Text>DEL</Text></Button>
        </Grid>

        </Wrapper>
    </Container>
  )
};

export default App;
