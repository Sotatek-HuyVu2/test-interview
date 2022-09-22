import React, { useState } from 'react';
import './index.css';
import BoxItem from './components/boxItem';
import { useDispatch, useSelector } from 'react-redux';
import { addBox, addChild, removeBox } from '../../store/list-box/reducers';
import { v4 as uuidv4 } from 'uuid';

const ListBox = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const listBox = useSelector((state: any) => state.box.listBox);

  const onselect = (e: any) => {
    const checkKey = e.target.value;
    if (value) {
      if (checkKey === 'addBox') {
        const box = {
          id: uuidv4(),
          name: value,
          children: [],
        };
        dispatch(addBox(box));
      } else {
        dispatch(
          addChild({
            id: uuidv4(),
            idParent: checkKey,
            name: value,
          }),
        );
      }
      setValue('');
    } else {
      alert('Empty');
    }
  };
  const handleDeleteBox = (id: string) => {
    dispatch(removeBox(id));
  };

  return (
    <div className='list-box'>
      <div className='list-box-add'>
        <input type='text' value={value} onInput={(e: any) => setValue(e.target.value)} required />
        <select value='' onChange={onselect}>
          <option value='' selected disabled hidden>
            Choose
          </option>
          <option value='addBox'>Add box</option>
          {listBox.map((box: any) => (
            <option key={box.id} value={box.id}>
              Move: {box.name}
            </option>
          ))}
        </select>
      </div>
      <div className='list'>
        {listBox.map((box: any) => (
          <BoxItem key={box.id} box={box} onDelete={handleDeleteBox} />
        ))}
      </div>
    </div>
  );
};

export default ListBox;
