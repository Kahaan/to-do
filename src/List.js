import React from 'react';

const List = (props) => {

    return (
      <div>
        <ul>
          {
            props.list.map((el,idx) => <li key={idx}>{el}</li>)
          }
        </ul>
      </div>
    )

}

export default List
