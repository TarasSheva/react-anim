import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";

const List = ({items, onRemove}) => (
    <TransitionGroup component={'ul'}>
        {items.map(item => (
            <CSSTransition
                timeout={2000}
                classNames={'os'}
                key={item.id}
            >
                <li onClick={() => onRemove(item.id)}>{item.title}</li>
            </CSSTransition>
        ))}
    </TransitionGroup>
)

export default List;