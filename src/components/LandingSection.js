import React from "react";
import { Avatar, Heading, VStack, Text, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import logo from "../images/logoyaserred.png";

const greeting = "Hello, I am Yaser!";
const bio1 = "A Frontend Developer";
const bio2 = "React enthusiast on 🔥";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#18181b"
    >
        <VStack spacing={2}>
            <Avatar src={logo} size="2xl" />
            <Box height={1} />
            <Text fontWeight="medium">{greeting}</Text>
            <Heading fontSize={50}>{bio1}</Heading>
            <Heading fontSize={30}>{bio2}</Heading>
        </VStack>
    </FullScreenSection>
);

export default LandingSection;
