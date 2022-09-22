import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveChildToBox, removeChild } from '../../../store/list-box/reducers';

const BoxItem = (props: any) => {
  const dispatch = useDispatch();

  const { box, onDelete } = props;
  const listBox = useSelector((state: any) => state.box.listBox);
  const listChild = useSelector((state: any) => state.box.listChild);

  const onMoveToBox = (value: any) => {
    const { idChild, idBox } = value;
    const newChild = listChild.filter((c: any) => c.id === idChild)[0];
    const newListChildlistChild = listChild.filter((c: any) => c.id !== idChild);
    dispatch(moveChildToBox([...newListChildlistChild, { ...newChild, idParent: idBox }]));
  };
  const onDeleteChild = (id: string) => {
    dispatch(removeChild(id));
  };

  return (
    <div className='box'>
      <div className='box-title'>
        <span>{box.name}</span>
        <button onClick={() => onDelete(box.id)}>delete</button>
      </div>
      <div className='list-children'>
        {listChild
          .filter((c: any) => c.idParent === box.id)
          .map((b: any) => (
            <div className='children' key={b.id}>
              <span>{b.name}</span>
              <div className='actions'>
                {listBox
                  .filter((b: any) => b.id !== box.id)
                  .map((box: any) => (
                    <button
                      className=' button'
                      key={box.id}
                      onClick={() => onMoveToBox({ idChild: b.id, idBox: box.id })}
                    >
                      Move: {box.name}
                    </button>
                  ))}
              </div>
              <button className='button' onClick={() => onDeleteChild(b.id)}>
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
export default BoxItem;
