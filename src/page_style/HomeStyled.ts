import styled from 'styled-components'

interface Props {
  isActive?: boolean
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(9,12,16);

`

export const Box = styled.div`
  width: 800px;
  height: 450px;

  border: 1px solid #30363D;
  border-radius: 5px;

  background-color: rgb(13,17,23);

  display: flex;
  overflow: hidden;
`

export const Left = styled.div`
  width: 40%;
  height: 100%;
  border-right: 1px solid #30363D;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 30px;

  img {
    width: 200px;
  }

  h1 {
    color: white;
  }

  span {
    text-align: justify;
    margin-top: 30px;
    color: #8B949E;
  }
`

export const Right = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 30px 30px;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div:nth-child(1) {
      span {
        font-size: 20px;
        font-weight: 700;
        color: #8B949E;
        margin: 0 8px;
        cursor: default;
      }
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
`

export const SwapButton = styled.button`
  font-weight: 800;
  font-size: 25px;
  color: #8B949E;
  opacity: 75%;
  color: ${(p: Props) => p.isActive ? 'white' : ''};
  opacity: ${(p: Props) => p.isActive ? '100%' : ''};
  transition: all .3s ease-in-out;

  &:hover {
    color: #FFF;
    opacity: 100%;
  }

`

export const Content = styled.div`
  form {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
    }
    
    div:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 30px;

      button:nth-child(1) {
        background-color: rgba(48, 54, 61, 0.4);
        font-size: 20px;
        padding: 7px;
        border-radius: 20px;
        width: 100px;
        transition: all .2s ease-in-out;

        &:hover{
          background-color: #30363D;
          border-radius: 10px;
        }
      }

      button:nth-child(2) {
        color: #8B949E;
        font-size: 16px;
        transition: all .2s ease-in-out;
        
        &:hover {
          color: #FFF;
          
        }
      }
    }

  }
`

export const Input = styled.input`
  border-bottom: 1px solid #8B949E;
  padding: 15px 0;
  font-size: 20px;
  color: #FFF;
  width: 100%;

  ::placeholder {
    color: #FFF;
    opacity: 75%;
  }
`