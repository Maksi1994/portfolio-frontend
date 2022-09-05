import {useRef, useState} from 'react'
import { useDrag, useDrop } from 'react-dnd'
import {Button, Form, InputGroup} from 'react-bootstrap';
import styles from './Skill.module.scss';

function Skill({ id, index, moveItem, changeData, deleteItem, ...props }) {
   const dragRef = useRef(null);
   const dropRef = useRef(null);
   const [name, setName] = useState(props.name);
   const [percent, setPercent] = useState(props.percent);

   const [{ handlerId }, drop] = useDrop({
      accept: 'skill',
      collect(monitor) {
         return {
            handlerId: monitor.getHandlerId(),
         }
      },
      hover(item, monitor) {
         if (!dropRef.current) {
            return
         }
         const dragIndex = item.index
         const hoverIndex = index
         // Don't replace items with themselves
         if (dragIndex === hoverIndex) {
            return
         }
         // Determine rectangle on screen
         const hoverBoundingRect = dropRef.current.getBoundingClientRect()
         // Get vertical middle
         const hoverMiddleY =
           (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
         // Determine mouse position
         const clientOffset = monitor.getClientOffset()
         // Get pixels to the top
         const hoverClientY = clientOffset.y - hoverBoundingRect.top
         // Only perform the move when the mouse has crossed half of the items height
         // When dragging downwards, only move when the cursor is below 50%
         // When dragging upwards, only move when the cursor is above 50%
         // Dragging downwards
         if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
         }
         // Dragging upwards
         if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
         }
         // Time to actually perform the action
         moveItem(dragIndex, hoverIndex)
         // Note: we're mutating the monitor item here!
         // Generally it's better to avoid mutations,
         // but it's good here for the sake of performance
         // to avoid expensive index searches.
         item.index = hoverIndex
      },
   })
   const [{ isDragging }, drag, preview] = useDrag({
      type: 'skill',
      item: () => {
         return { id, index }
      },
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   });

   const onChangePercent = (percent) => {
      setPercent(percent);

      changeData({
         name,
         percent
      })
   };

   const onChangeName = (name) => {
       setName(name);

       changeData({
          name,
          percent
       })
    };

   preview(drop(dropRef))
   drag(dragRef)

   return <div ref={dropRef} className="d-flex border p-3 w-100" data-handler-id={handlerId}>
      <div className={'p-3 border me-3 ' + styles.dragZone } ref={dragRef}>#</div>

      <InputGroup className="w-25">
         <Form.Control
           placeholder="Skill Name"
           value={name}
           onChange={(e) => onChangeName(e.target.value)}
           aria-label="Username"
           aria-describedby="basic-addon1"
         />
      </InputGroup>

      <div className="w-25 ms-5">
         <Form.Label>Level ( {percent}% )</Form.Label>
         <Form.Range value={percent}  onChange={(e) => onChangePercent(e.target.value)}/>
      </div>

      <Button variant="danger" className="ms-auto" onClick={deleteItem}>x</Button>
   </div>
}

export default Skill;
