import React, { useState } from 'react';
import { Container, Tooltip } from 'reactstrap';

function Example(args) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Container>
        <br className='my-5'/>
        <br className='my-5'/>
        <br className='my-5'/>
        <br className='my-5'/>
        <div
        style={{ display: 'grid', placeItems: 'center' }}
        >
      <p>
        ini adalah website contoh dari menggunakan {' '} 
        <a
          href="https://example.com"
          style={{ color: 'black', textDecoration: 'none' }}
          target="_blank"
          rel="noreferrer"
          id="TooltipExample"
        >
          react js
        </a>
        dan menggunakan {' '}
        <a
          href="https://example.com"
          style={{ color: 'black', textDecoration: 'none' }}
          target="_blank"
          rel="noreferrer"
          id="TooltipExample"
        >
         reactstrap
        </a>
        dan website ini dibuat untuk memenuhi kualifikasi recruitment DTI.

      </p>
      <Tooltip
        {...args}
        isOpen={tooltipOpen}
        target="TooltipExample"
        toggle={toggle}
      >
        Hello world!
      </Tooltip>
    </div>
    </Container>
  );
}

Example.args = {
  autohide: true,
  flip: true,
};

Example.argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['top', 'left', 'right', 'bottom'],
  },
};

export default Example;