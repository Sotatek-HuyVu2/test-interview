import React from 'react';

const TodoItem = (props: { text: string }) => {
  const { text } = props;

  return (
    <div className='todo'>
      <label>{text}</label>
    </div>
  );
};

export default TodoItem;
