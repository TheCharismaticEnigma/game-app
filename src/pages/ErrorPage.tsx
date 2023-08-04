import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import meh from '../assets/meh.webp';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  //   const error = useRouteError();

  return (
    <>
      <NavBar />

      <Flex
        fontSize={'3rem'}
        alignItems={'center '}
        direction="column"
        mt={'2rem'}
        gap={'2rem'}
        color={'red.600'}
      >
        <Heading textAlign={'center'} size={'4xl'}>
          OOPS...
        </Heading>
        <Image w={'15rem'} src={meh} />
        <Text>
          {isRouteErrorResponse(useRouteError())
            ? 'NO SUCH PAGE EXISTS.'
            : 'AN UNEXPECTED ERROR OCCURRED'}
        </Text>
      </Flex>
    </>
  );
};

export default ErrorPage;
