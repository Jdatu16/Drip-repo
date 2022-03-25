import { Box, Text } from "@chakra-ui/react";
import {
  FirstCheckpoint,
  SecondCheckpoint,
  ThirdCheckpoint,
  FourthCheckpoint,
} from "../../assets/svg";

const Line = Box;
const OrderCheckpoints = Box;
const OrderCheckpoint = Box;

export const CheckpointComponent = () => {
  return (
    <OrderCheckpoints
      display="flex"
      justifyContent="space-between"
      width="853px"
      height="85px"
    >
      <Line
        position="absolute"
        width="850px"
        borderBottom="5px solid rgba(0, 0, 0, 0.06)"
        zIndex="0"
        top="373px"
      />
      <OrderCheckpoint display="flex" gap="8px" flexDir="column">
        <Box
          padding="8px"
          width="20px"
          height="20px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="#0486FF"
          borderRadius="50%"
          zIndex="1"
        >
          <FirstCheckpoint fill="#fff" />
        </Box>
        <Text
          margin="0"
          h="15px"
          fontFamily="Circular Std"
          fontWeight="500"
          fontSize="14px"
          color=" rgba(0, 0, 0, 0.8)"
        >
          Order placed
        </Text>
        <Text
          margin="0"
          h="15px"
          fontFamily="Circular Std"
          fontWeight="500"
          fontSize="14px"
          color=" rgba(0, 0, 0, 0.48)"
        >
          11 apr.
        </Text>
      </OrderCheckpoint>
      <OrderCheckpoint
        display="flex"
        gap="8px"
        alignItems="center"
        flexDir="column"
      >
        <Box
          padding="8px"
          width="20px"
          height="20px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="#F0F0F0"
          borderRadius="50%"
          zIndex="1"
        >
          <SecondCheckpoint fill="rgba(0, 0, 0, 0.48)" />
        </Box>
        <Text
          margin="0"
          h="15px"
          fontFamily="Circular Std"
          fontWeight="500"
          fontSize="14px"
          color=" rgba(0, 0, 0, 0.8)"
        >
          Order confirmed
        </Text>
        <Text
          margin="0"
          h="15px"
          fontFamily="Circular Std"
          fontWeight="500"
          fontSize="14px"
          color=" rgba(0, 0, 0, 0.48)"
        >
          14 apr.
        </Text>
      </OrderCheckpoint>
      <OrderCheckpoint
        display="flex"
        gap="8px"
        alignItems="center"
        flexDir="column"
      >
        <Box
          padding="8px"
          width="20px"
          height="20px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="#F0F0F0"
          borderRadius="50%"
          zIndex="1"
        >
          <ThirdCheckpoint fill="rgba(0, 0, 0, 0.48)" />
        </Box>
        <Text
          margin="0"
          h="15px"
          fontFamily="Circular Std"
          fontWeight="500"
          fontSize="14px"
          color=" rgba(0, 0, 0, 0.8)"
        >
          Shipped
        </Text>
        <Text
          margin="0"
          h="15px"
          fontFamily="Circular Std"
          fontWeight="500"
          fontSize="14px"
          color=" rgba(0, 0, 0, 0.48)"
        >
          25 apr.
        </Text>
      </OrderCheckpoint>
      <OrderCheckpoint
        display="flex"
        gap="8px"
        alignItems="flex-end"
        flexDir="column"
      >
        <Box
          padding="8px"
          width="20px"
          height="20px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="#F0F0F0"
          borderRadius="50%"
          zIndex="1"
        >
          <FourthCheckpoint fill="rgba(0, 0, 0, 0.48)" />
        </Box>
        <Text
          margin="0"
          h="15px"
          fontFamily="Circular Std"
          fontWeight="500"
          fontSize="14px"
          color=" rgba(0, 0, 0, 0.8)"
        >
          Delivered
        </Text>
        <Text
          margin="0"
          h="15px"
          fontFamily="Circular Std"
          fontWeight="500"
          fontSize="14px"
          color=" rgba(0, 0, 0, 0.48)"
        >
          25 apr.
        </Text>
      </OrderCheckpoint>
    </OrderCheckpoints>
  );
};
