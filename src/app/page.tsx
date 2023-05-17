'use client';

import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container >
      <Heading as='h1' size={'2xl'} mt={1} mb={2}>Tema</Heading>
      <Stack spacing={2} mb={4}>
        <Heading as='h2'>Tipografia</Heading>
        <Text textStyle='displayLarge'>Display Large</Text>
        <Text textStyle='displayMedium'>Display Medium</Text>
        <Text textStyle='displaySmall'>Display Small</Text>

        <Text textStyle='headlineLarge'>Headline Large</Text>
        <Text textStyle='headlineMedium'>Headline Medium</Text>
        <Text textStyle='headlineSmall'>Headline Small</Text>

        <Text textStyle='titleLarge'>Title Large</Text>
        <Text textStyle='titleMedium'>Title Medium</Text>
        <Text textStyle='titleSmall'>Title Small</Text>

        <Text textStyle='labelLarge'>Label Large</Text>
        <Text textStyle='labelMedium'>Label Medium</Text>
        <Text textStyle='labelSmall'>Label Small</Text>

        <Text textStyle='bodyLarge'>Body Large</Text>
        <Text textStyle='bodyMedium'>Body Medium</Text>
        <Text textStyle='bodySmall'>Body Small</Text>
      </Stack>

      <Stack mb={4}>
        <Heading as='h2'>Componentes</Heading>
        <Button
          maxW={'100px'}
          variant='primarySolid'
        >Button</Button>
        <Button
          maxW={'100px'}
          variant='primaryOutline'
        >Button</Button>
        <Button
          maxW={'100px'}
          variant='primaryText'
        >Button</Button>
      </Stack>
    </Container>
  )
}
