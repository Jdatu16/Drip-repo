import { Box, Button, Image, Text } from "@chakra-ui/react";
import { CheckpointComponent, ContentHeaderComponent } from "./atoms";
import shirt from "../assets/shirt.png";
import { motion } from "framer-motion";

const ContentContainer = Box;
const OrderInfoWrapper = Box;
const OrderArrival = Box;
const OrderInfo = Box;
const ProductInfo = Box;
const InteractiveButton = motion(Button);
const InteractiveText = motion(Text);

export const Content = () => {
  return (
    <Box
      position="absolute"
      width="1072px"
      height="700px"
      left="50%"
      top="50%"
      bg="#FFFFFF"
      transform="auto"
      translateX="-50%"
      translateY="-50%"
      borderRadius="16px"
      display="flex"
      alignItems="flex-start"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
      justifyContent="center"
    >
      <Box
        width="992px"
        height="591px"
        display="flex"
        flexDir="column"
        alignItems="center"
        padding="0px"
        gap="12px"
        marginTop="30px"
      >
        <ContentContainer
          className="hi"
          width="853px"
          height="523px"
          display="flex"
          flexDir="column"
          alignItems="center"
          gap="64px"
        >
          <ContentHeaderComponent />
          <OrderInfoWrapper
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            padding="0px"
            width="853px"
            height="272px"
            gap="32px"
          >
            <OrderArrival
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="10px"
              width="106px"
              height="55px"
            >
              <Text
                margin="0"
                h="15px"
                fontFamily="Circular Std"
                fontWeight="light"
                fontSize="14px"
                color=" rgba(0, 0, 0, 0.48)"
                padding="1px 0"
                borderBottom="1px dashed rgba(0, 0, 0, 0.64)"
              >
                Estimated arrival
              </Text>
              <Text
                margin="0"
                h="15px"
                fontFamily="Circular Std"
                fontWeight="500"
                fontSize="22px"
                color=" rgba(0, 0, 0, 0.8)"
              >
                15-16 Apr.
              </Text>
            </OrderArrival>
            <OrderInfo
              display="flex"
              flexDirection="column"
              width="853px"
              height="196px"
              gap="30px"
            >
              <CheckpointComponent />
              <ProductInfo
                display="flex"
                justifyContent="space-between"
                borderTop="1px solid #E5E7EB"
                paddingTop="30px"
              >
                <Box display="flex" alignItems="flex-start" gap="15px">
                  <Image src={shirt} />
                  <Box display="flex" flexDir="column" gap="10px">
                    <Text
                      fontFamily="Circular Std"
                      fontStyle="normal"
                      fontWeight="400"
                      fontSize="16px"
                      lineHeight="130%"
                      margin="0"
                    >
                      Shishi By{" "}
                      <span style={{ fontWeight: "700" }}>Murtazi</span>
                    </Text>
                    <Text
                      fontFamily="Circular Std"
                      fontStyle="normal"
                      fontWeight="400"
                      fontSize="14px"
                      lineHeight="130%"
                      color="rgba(0, 0, 0, 0.48)"
                      margin="0"
                    >
                      Quantity: <span style={{ color: "black" }}>1</span>
                    </Text>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  height="fit-content"
                  gap="10px"
                >
                  <Text
                    fontFamily="Circular Std"
                    fontStyle="normal"
                    fontWeight="500"
                    fontSize="16px"
                    lineHeight="130%"
                    color="rgba(0, 0, 0, 0.48)"
                    margin="0"
                  >
                    Total amount
                  </Text>
                  <Text
                    fontFamily="Circular Std"
                    fontStyle="normal"
                    lineHeight="130%"
                    color="black"
                    fontWeight="400"
                    fontSize="20px"
                    margin="0"
                  >
                    $35.00
                  </Text>
                </Box>
              </ProductInfo>
            </OrderInfo>
          </OrderInfoWrapper>
          <Box display="flex" gap="20px">
            <InteractiveText
              whileHover={{ scale: 1.1 }}
              fontFamily="Circular Std"
              fontStyle="normal"
              fontHeight="400"
              fontSize="14px"
              lineHeight="24px"
              color="rgba(0, 0, 0, 0.64)"
              letterSpacing="1px"
              cursor="pointer"
            >
              Having some trouble?
            </InteractiveText>
            <InteractiveButton
              initial={{ background: "rgba(0, 0, 0, 0.04)" }}
              whileHover={{
                background: "#9e9e9e",
                color: "#fff",
                transition: { type: "spring", duration: 1 },
              }}
              border="none"
              borderRadius="8px"
              padding="16px 24px"
              fontFamily="Circular Std"
              fontStyle="normal"
              fontSize="16px"
              fontWeight="500"
              cursor="pointer"
            >
              Contact Support
            </InteractiveButton>
          </Box>
        </ContentContainer>
      </Box>
    </Box>
  );
};
