import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer'

export default function Sandbox() {

  const dispatch = useDispatch();
  const data = useSelector(state => state.test.data);

  return (
    <>
      <h1>Testing</h1>
      <h3>The data is: {data}</h3>
      <Button onClick={() => dispatch(increment(1))}
        content='Increment' color='green' />
      <Button onClick={() => dispatch(decrement(1))}
        content='Decrement' color='twitter' />
    </>
  )
}