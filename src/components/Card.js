import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CardComponent = ({ title, description, imageSrc }) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.

    return (
        <Box
            boxSize="sm"
            backgroundColor="white"
            borderRadius="lg"
            color="black"
        >
            <VStack justifyContent="space-between">
                <Image
                    src={imageSrc}
                    borderTopRadius="lg"
                    objectFit="cover"
                    alt="projects"
                />
                <Box px={5} py={1}>
                    <Heading fontSize={15} mb={2}>
                        {title}
                    </Heading>
                    <Text fontSize={12}>{description}</Text>
                </Box>
                <Box px={5} py={1} width="100%" cursor="pointer">
                    <HStack>
                        <Text fontSize={10}>See more</Text>
                        <FontAwesomeIcon icon={faArrowRight} size="sm" />
                    </HStack>
                </Box>
            </VStack>
        </Box>
    );
};

export default CardComponent;
