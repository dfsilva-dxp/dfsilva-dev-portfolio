'use client';

import { MapPinLine } from 'phosphor-react';

import { Flex, Box } from '@/components';

export default function Home() {
  return (
    <Flex
      align="center"
      justify="center"
      gap="1rem"
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <Flex
        align="center"
        justify="center"
        gap="1rem"
        direction="column"
        style={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto'
        }}
      >
        <Box
          firstChild="Localidade"
          lastChild="São Paulo, SP - BR"
          icon={<MapPinLine size={20} weight="bold" />}
        />
      </Flex>
    </Flex>
  );
}
