import React from 'react';
import '../../../styles/Suites.css';
import { Resizable } from 're-resizable';
export function SuitesContent() {
  return (
    <>
      <Resizable
        defaultSize={{
          width: 320,
          height: 200,
        }}
      >
        Test Suites
      </Resizable>
      <Resizable
        defaultSize={{
          width: 320,
          height: 200,
        }}
      >
        Test Steps
      </Resizable>
    </>
  );
}
