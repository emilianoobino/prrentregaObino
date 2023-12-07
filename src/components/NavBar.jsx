import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <Flex>
    <Box p='4' bg='black' color='white'>
    Tony's Player One
    </Box>
    <Spacer />
    <Menu>
  <MenuButton className='menu'>
    Consolas y Juegos
  </MenuButton>
  <MenuList>
    <MenuItem>Playstation</MenuItem>
    <MenuItem>Nintendo</MenuItem>
    <MenuItem>Juegos PS</MenuItem>
    <MenuItem>Juegos Nintendo</MenuItem>
    
  </MenuList>
</Menu>
<Spacer />

    <Box p='4' bg='black' color='white'>
    <CartWidget/>
    </Box>
  </Flex>
        
        
    </div>
  )
}

export default NavBar