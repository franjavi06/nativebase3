import React from "react";
import {
  Text,
  Box,
  HStack,
  Pressable,
  Badge,
  Spacer,
  Flex,
  Image,
  Heading,
  ScrollView,
} from "native-base";
import ots from "../assets/img/repair.png";
import neumatic from "../assets/img/neumatic.png";
import speed from "../assets/img/speedometer.png";
import truck from "../assets/img/demolishing.png";

const Home = () => {
  return (
    <Box>
      <Heading
        size="md"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: "warmGray.50",
        }}
        p="2"
        paddingTop={4}
      >
        Bienvenido, Jhon Doe
      </Heading>

      <ScrollView horizontal>
        <Flex direction="row" mb="2.5" mt="1.5">
          <Pressable
            onPress={() => console.log("I'm Pressed")}
            p="2"
            justifyContent="center"
            alignItems="center"
          >
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <>
                  <Box
                    maxW="48"
                    borderWidth="1"
                    borderColor="coolGray.300"
                    shadow="3"
                    bg={
                      isPressed
                        ? "coolGray.200"
                        : isHovered
                        ? "coolGray.200"
                        : "coolGray.100"
                    }
                    p="4"
                    rounded="8"
                    justifyContent="center"
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                  >
                    <Image source={ots} alt="Alternate Text" size="xs" />
                  </Box>
                  <Text justifyContent="center">OTs</Text>
                </>
              );
            }}
          </Pressable>

          <Pressable
            onPress={() => console.log("I'm Pressed")}
            p="2"
            justifyContent="center"
            alignItems="center"
          >
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <>
                  <Box
                    maxW="48"
                    borderWidth="1"
                    borderColor="coolGray.300"
                    shadow="3"
                    bg={
                      isPressed
                        ? "coolGray.200"
                        : isHovered
                        ? "coolGray.200"
                        : "coolGray.100"
                    }
                    p="4"
                    rounded="8"
                    justifyContent="center"
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                  >
                    <Image source={truck} alt="Alternate Text" size="xs" />
                  </Box>
                  <Text justifyContent="center">Equipos</Text>
                </>
              );
            }}
          </Pressable>

          <Pressable
            onPress={() => console.log("I'm Pressed")}
            p="2"
            justifyContent="center"
            alignItems="center"
          >
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <>
                  <Box
                    maxW="48"
                    borderWidth="1"
                    borderColor="coolGray.300"
                    shadow="3"
                    bg={
                      isPressed
                        ? "coolGray.200"
                        : isHovered
                        ? "coolGray.200"
                        : "coolGray.100"
                    }
                    p="4"
                    rounded="8"
                    justifyContent="center"
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                  >
                    <Image source={speed} alt="Alternate Text" size="xs" />
                  </Box>
                  <Text justifyContent="center">Kms</Text>
                </>
              );
            }}
          </Pressable>

          <Pressable
            onPress={() => console.log("I'm Pressed")}
            p="2"
            justifyContent="center"
            alignItems="center"
          >
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <>
                  <Box
                    maxW="48"
                    borderWidth="1"
                    borderColor="coolGray.300"
                    shadow="3"
                    bg={
                      isPressed
                        ? "coolGray.200"
                        : isHovered
                        ? "coolGray.200"
                        : "coolGray.100"
                    }
                    p="4"
                    rounded="8"
                    justifyContent="center"
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                  >
                    <Image source={neumatic} alt="Alternate Text" size="xs" />
                  </Box>
                  <Text justifyContent="center">Neumáticos</Text>
                </>
              );
            }}
          </Pressable>
        </Flex>
      </ScrollView>
    </Box>
  );
};

export default Home;
