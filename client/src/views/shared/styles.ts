
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 60vw;
  max-height: 90vh;
  display: flex;
  margin:5rem auto;
  flex-direction: column;
  align-items: center;
  @media(max-width:1100px){
    width:90vw;
    min-height:60vh;
    max-height:90vh;
    margin:10vh auto;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin: 1rem 2rem;
  @media(max-width:1100px){
    margin:0.5rem 1rem;
    font-size:0.8rem;
  }
`;
export const SelectButton = styled.select`
  text-align: center;
  font-size: 1.4rem;
  width: 20vw;
  margin: 2rem;
  font-weight: 800;
  color: #fff;
  background-color: #000127;
  @media (max-width:1100px){
    font-size:.8rem;
    width:50vw;
  }
`;
