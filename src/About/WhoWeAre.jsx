import { Stack, Typography } from '@mui/material'
import React from 'react'

const WhoWeAre = () => {
  return (
    <Stack p={"40px 70px 40px 70px"} gap={1}>
      <Typography fontWeight={"bold"} variant='h3' letterSpacing={2}>Who We Are</Typography>
      <Typography>
        Welcome to Privily, where solitude meets innovation. In a world where
        open office spaces dominate, we understand the need for personal space
        where focus and creativity can flourish. Privily was born out of the
        desire to create a sanctuary for professionals in the bustling work
        environment. Our office pods are designed to give you a slice of privacy
        in the most crowded of places, ensuring that your productivity and
        mental well-being are never compromised.
      </Typography>
    </Stack>
  );
}

export default WhoWeAre