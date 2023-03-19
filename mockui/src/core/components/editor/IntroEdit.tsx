// In client side

import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Input as AntInput } from 'antd';
import { MarkDownField } from 'src/core/widgets/MarkdownField';
import axios from 'axios';

const Wrapper = styled.div`
  margin: 8px 0;
`;

const Topic = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 7px;
`;

const Input = styled(AntInput)`
  border: 1px solid #222;
  height: 2.625rem;
  padding: 0.625rem;
  max-width: 100%;
  background: #424242;
  color: #fff;
  border-radius: 2px;
  margin-bottom: 5px;
`;

export function IntroEdit({ METADATA, state, update }: any) {
  const [spellCheckData, setSpellCheckData] = useState([]);

  const proofReading = async (data) => {
    try {
      const response = await axios.
      post('http://localhost:5001/template/spell', { text: data });
      setSpellCheckData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {METADATA.map((metadata) => (
        <Wrapper key={metadata.label}>
          <Topic>{metadata.label}</Topic>
          {metadata.type === 'Input' ? (
            <Input
              value={
                metadata.value.includes('.')
                  ? state[metadata.value.split('.')[0]][metadata.value.split('.')[1]]
                  : state[metadata.value]
              }
              data-label={metadata.value}
              onChange={(event) => {
                update(event.target.dataset.label, event.target.value);
                proofReading(event.target.value);
              }}
            />
          ) : (
            <MarkDownField
              value={state[metadata.value]}
              setValue={(text) => update(metadata.value, text)}
            />
          )}
          <div>{spellCheckData.join(',')}</div> // Display spell check data here
        </Wrapper>
      ))}
    </>
  );
}