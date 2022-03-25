import { Box, Heading, Text } from "@chakra-ui/react";
import { Waiting } from "../../assets/svg";

const ContentHeaderWrapper = Box;
const ContentHeader = Box;

export const ContentHeaderComponent = () => {
  return (
    <ContentHeaderWrapper
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="853px"
      height="187px"
      gap="20px"
    >
      <ContentHeader
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="853px"
        height="111px"
      >
        <Heading
          h="31px"
          fontFamily="Circular Std"
          fontStyle="normal"
          fontWeight="400, regular"
          fontSize="24px"
          as="h2"
        >
          Order status
        </Heading>
        <Box>
          <Waiting />
        </Box>
      </ContentHeader>
      <Text
        w="574px"
        fontFamily="Circular Std"
        fontStyle="normal"
        fontWeight="400"
        LineHeight="26px"
        fontSize="16px"
        letterSpacing="0.01em"
        textAlign="center"
      >
        You are about to get you drip, but first we need to check stock. Please
        wait a few minutes and then press refresh (button)
      </Text>
    </ContentHeaderWrapper>
  );
};
