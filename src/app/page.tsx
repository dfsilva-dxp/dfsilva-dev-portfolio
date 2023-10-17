'use client';

import { Flex, SplitElement } from '@/components';

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
      <Flex align="center" justify="center" gap="1rem">
        <SplitElement firstChild="firstChild" lastChild="lastChild" />
      </Flex>
    </Flex>
  );
}
