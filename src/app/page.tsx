'use client';

import { Flex } from '@/components';
import Image from 'next/image';

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
        <Image
          src="images/svg/logo.svg"
          alt="Next.js Logo"
          width={36}
          height={36}
          priority
        />

        <Flex direction="column">
          <strong>Daniel Silva</strong>
          <strong>Sênior Frontend Developer</strong>
        </Flex>
      </Flex>
    </Flex>
  );
}
