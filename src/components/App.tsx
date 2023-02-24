import React from "react"
import { Heading, Text } from '@chakra-ui/react'
import * as Logo from "../assets/se-logo.png"

export default function App() {
    return (
        <>
            <Heading as='h1' size='4xl' fontSize='50px' noOfLines={1} style={{"textAlign": "center", "marginTop": "100px"}}>
                <img src={Logo} alt="Logo" style={{"width": "50px"}} />
                Source Eyes template
            </Heading>
            <Text style={{"textAlign": "center"}} fontSize='20px'>
                To see our website click <a href="https://sourceeyes.querlit.com/" target={"_blank"}>here</a>
            </Text>
        </>
    )
}