// import { Button} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Flex,

  // Link,
  Button,
  Menu,
  MenuButton,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (


    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      

      <Flex alignItems={'center'}>
        <Stack direction={'row'} spacing={7}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Button borderRadius={"3xl"}>
    <Link  to={"/"} >ALL</Link>
        </Button>
         <Button borderRadius={"3xl"} >
         <Link  to={"/html"} >HTML</Link>
         </Button>
         <Button borderRadius={"3xl"}>
         <Link  to={"/css"} >CSS</Link>
         </Button>
         <Button borderRadius={"3xl"}>
         <Link  to={"/javascript"} >Javascript</Link>
         </Button>

          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
           
            </MenuButton>
          </Menu>
        </Stack>
      </Flex>
    </Flex>
  </Box>

  )
}

export default Navbar