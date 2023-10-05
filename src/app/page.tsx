'use client';

import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

import { Header, Hero, Loader } from '@/components';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <LayoutGroup>
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Hero />
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
