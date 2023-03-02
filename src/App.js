import { ChakraProvider } from '@chakra-ui/react'
import swApp from './component/stopwatch';

const SW = swApp

function App() {
  return (
    <ChakraProvider>
      <div>
        <SW />
      </div>
    </ChakraProvider>
  );
}

export default App;
