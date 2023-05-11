'use client';

import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container >
      <Heading as='h1' size={'2xl'} mt={1} mb={2}>Tema</Heading>
      <Stack>
        <Heading as='h2'>Tipografia</Heading>
        <Text textStyle='displayLarge'>Display Large</Text>
        <Text textStyle='displayMedium'>Display Medium</Text>
        <Text textStyle='displaySmall'>Display Small</Text>
      </Stack>

      <Heading as='h2'>Componentes</Heading>
      <Stack>
        <Button>alan1tavares</Button>
      </Stack>
    </Container>
  )
}
