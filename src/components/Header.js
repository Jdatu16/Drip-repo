import { Box, Image, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Logo, Vector } from "../assets/svg";
import avatar from "../assets/Avatar.png";

const MotionLink = motion(Link);

export const Header = () => {
  return (
    <Box
      position="absolute"
      w="100%"
      boxSizing="border-box"
      h="76px"
      top="0px"
      bg="#fff"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding="0px 74px"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
    >
      <Logo />
      <Box display="flex" width="203px" gap="40px" height="28px">
        <MotionLink
          textDecoration="none"
          fontFamily="Circular Std"
          fontStyle="normal"
          fontWeight="400"
          fontSize="16px"
          lineHeight="28px"
          color="rgba(0, 0, 0, 0.64)"
          whileHover={{ y: "-5px" }}
          href="/"
        >
          How it works
        </MotionLink>
        <MotionLink
          textDecoration="none"
          fontFamily="Circular Std"
          fontStyle="normal"
          fontWeight="400"
          fontSize="16px"
          lineHeight="28px"
          color="rgba(0, 0, 0, 0.64)"
          whileHover={{ y: "-5px" }}
          href="/"
        >
          About us
        </MotionLink>
      </Box>
      <Box display="flex" alignItems="center" gap="5px" w="290px">
        <Box w="120px" display="flex" alignItems="center" gap="5px">
          <Vector />
          <Text
            fontFamily="Circular Std"
            fontStyle="normal"
            fontWeight="400"
            fontSize="16px"
            cursor="pointer"
          >
            Cart (0)
          </Text>
        </Box>
        <Box w="153px" display="flex" alignItems="center" gap="5px">
          <Image cursor="pointer" src={avatar} />
          <Text
            cursor="pointer"
            fontFamily="Circular Std"
            fontStyle="normal"
            fontWeight="400"
            fontSize="16px"
          >
            Guri Sitchinava
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
