import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.webp';
import NavBar from '../components/NavBar';
import EntitiyColor from '../utils/entitiyColor';

const ErrorPage = () => {
  //   const error = useRouteError();
  const { color } = EntitiyColor();

  return (
    <>
      <NavBar />
      <Flex justifyContent={'center'} alignItems={'center'} marginTop={'3rem'}>
        <Box
          style={{
            overflow: 'hidden',
            borderRadius: '24px',
            boxShadow: `0 0.5px 5px 0 ${color} `,
          }}
          padding={'2rem'}
        >
          <Card
            direction={'column'}
            alignItems={'center'}
            justify={'space-between'}
            width={'37rem'}
            padding={'1rem 0 '}
            borderRadius={'15px'}
          >
            <CardHeader>
              <Image src={logo} height={'10rem'} />
            </CardHeader>

            <CardBody>
              <Stack spacing={4} alignItems={'center'} gap={'3rem'}>
                <Heading textAlign={'center'} size={'3xl'}>
                  Page Not Found
                </Heading>
                <Text opacity={'0.7'} textAlign={'center'} fontSize={'2rem'}>
                  The page you are looking for doesn't exist or has been moved.
                </Text>

                <Link to={'/'}>
                  <Button
                    _hover={{
                      color: 'black',
                      transform: ' translateY(-5%) scale(1.05)',
                    }}
                    transition={'all 200ms ease-out'}
                    colorScheme="green"
                    borderRadius={'35px'}
                    fontSize={'2rem'}
                    padding={'1.5em 1.75em '}
                    color={'rgba(0,0,0,0.6)'}
                  >
                    Go Home
                  </Button>
                </Link>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </>
  );
};

export default ErrorPage;
