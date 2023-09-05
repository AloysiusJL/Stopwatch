import React from "react"
import { Button, Stack, Box, Text, Flex } from '@chakra-ui/react'
import { Card, CardBody } from '@chakra-ui/react'

class swApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRunning: false,
            elapsedTime: 0
        }
        this.intervalID = null
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    start = () => {
        if (!this.state.isRunning) { // Check if the stopwatch is not already running
            this.setState({ isRunning: true })
            this.intervalID = setInterval(() => {
                this.setState(prevState => ({
                    elapsedTime: prevState.elapsedTime + 10
                }))
            }, 10)
        }
    }

    stop = () => {
        this.setState({ isRunning: false })
        clearInterval(this.intervalID)
    }

    reset = () => {
        this.setState({ elapsedTime: 0, isRunning: false })
        clearInterval(this.intervalID)
    }

    formatTime = time => {
        const ms = Math.floor(time % 100);
        const s = Math.floor(time / 100) % 60
        const m = Math.floor(time / 6000) % 60
        const h = Math.floor(time / 360000)
        return `${h.toString().padStart(2, "0")}:${m
            .toString()
            .padStart(2, "0")}:${s.toString().padStart(2, "0")}.${ms
                .toString()
                .padStart(2, "0")}`;
    }

    render() {
        return (
            <Flex height="100vh" align="center" justify="center">
                <Card bg="black" w="400px" h="200px">
                    <CardBody>
                        <div>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Text className="stopwatch-display" fontSize="6xl" color="white">{this.formatTime(this.state.elapsedTime)}</Text>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center" mt="10px">
                                <Stack spacing={10} direction='row' align='center'>
                                    <Button onClick={this.start} colorScheme='green' disabled={this.state.isRunning}>Start</Button>
                                    <Button onClick={this.stop} colorScheme='red'>Stop</Button>
                                    <Button onClick={this.reset} colorScheme='yellow'>Reset</Button>
                                </Stack>
                            </Box>
                        </div>
                    </CardBody>
                </Card>
            </Flex>
        )
    }
}

export default swApp
