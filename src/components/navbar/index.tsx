import * as React from 'react';
import { useState, useContext } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  MenuDivider,
  Avatar,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { PAGE_LOGO } from '../utils';
import { useMediaQuery } from '@chakra-ui/react';
import LoginModal from '../login';
import { useAppContext } from '../context';
import * as Cookies from 'js-cookie';

const Links = ['Animes'];

type children = {
  children: React.ReactNode;
};

const NavLink = ({ children }: children) => (
  <Link
    px={2}
    py={1}
    fontWeight='bolder'
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'/'}>
    {children}
  </Link>
);

const index = ({ children }: children): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [smallerThan580] = useMediaQuery('(max-width: 580px)');
  const [openModal, setopenModal] = useState(false);
  const user = useAppContext();

  return (
    <>
      <Box bg={useColorModeValue('#A1DBF1', '#E4F4F3')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box width={smallerThan580 ? 'auto' : 'sm'}>
              <Image src={PAGE_LOGO} alt='anime page' />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            {user ? (
              <Flex alignItems={'center'}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={
                        'https://www.tsensor.online/wp-content/uploads/2020/04/avatar-icon-png-105-images-in-collection-page-3-avatarpng-512_512.png'
                      }
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Box as='h2'>Welcome {JSON.parse(user).username}</Box>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                      onClick={() => {
                        Cookies.remove('user');
                        window.location.reload();
                      }}>
                      Log Out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            ) : (
              <Button
                onClick={() => {
                  setopenModal(true);
                }}
                fontWeight={600}
                color={'white'}
                bg={'#0E86D4'}
                href={'#'}
                _hover={{
                  bg: '#68BBE3',
                }}>
                Log In
              </Button>
            )}
          </Stack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box>{children}</Box>
      <LoginModal
        isOpen={openModal}
        onClose={() => {
          setopenModal(false);
        }}
      />
    </>
  );
};

export default index;
