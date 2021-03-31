import Head from 'next/head'
import { useState } from 'react'

import { Container, Box, Left, Right, SwapButton, Input, Content } from '../page_style/HomeStyled'

interface Props {
  isActive?: string;
}


export default function Home() {
  const [login, setLogin] = useState(true)
  const [register, setRegister] = useState(false)

  const chooseLogin = () => {
    setLogin(true)
    setRegister(false)
  }
  
  const chooseRegister = () => {
    setLogin(false)
    setRegister(true)
  }

  return (
    <Container>
      <Head>
        <title>Main</title>
      </Head>
      <Box>
        <Left>
          <img src="assets/world_wide_web.svg" alt="icone"/>
          <h1>
            Welcome
          </h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, a 
            facilis unde praesentium inventore necessitatibus vel blanditiis 
            laboriosam.
          </span>
        </Left>
        <Right>
          <div>
            <div>
              <SwapButton isActive={login} onClick={chooseLogin}>
                Sign In
              </SwapButton>
              <span>/</span>
              <SwapButton isActive={register} onClick={chooseRegister}>
                Sign Up
              </SwapButton>
            </div>
          </div>
          <Content>
            {login ? 
              <form>
              <div>
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
              </div>
              <div>
                <button>
                  Sign In
                </button>
                <button>
                  Forgot password?
                </button>
              </div>
            </form>
            :
            <form>
              <div>
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Cell" />
              </div>
              <div>
                <button>
                  Sign Up
                </button>
              </div>
            </form>
            }
            
          </Content>
        </Right>
      </Box>
    </Container>
  )
}
