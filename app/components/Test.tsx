'use client'

import { useRef } from 'react';
import { executeServerFunction } from '../lib/db';

const Test = () => {
  const results = useRef<HTMLDivElement>(null);
  return (
    <>
      <a
        style={{ color: 'blue' }}
        href="#"
        onClick={async () => {
          while (true) {
            const result = await executeServerFunction();
            results.current?.insertBefore(
              document.createTextNode(JSON.stringify(result) + '\n'),
              results.current?.firstChild
            );
          }
        }}
      >
        Start querying
      </a> — reload to stop
      <div ref={results} style={{ whiteSpace: 'pre-wrap' }}></div>
    </>
  );
};

export default Test; 
