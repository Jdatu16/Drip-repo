import { Box } from "@chakra-ui/react";
import { Content, Header } from "./components";

function App() {
  return (
    <Box
      position="relative"
      width="1440px"
      left="50%"
      top="0"
      height="899px"
      background="#F5F5F5"
      transform="auto"
      translateX="-50%"
    >
      <Header />
      <Content />
    </Box>
  );
}

export default App;
