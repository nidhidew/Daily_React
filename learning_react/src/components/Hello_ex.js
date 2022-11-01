import React from 'react';
const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello User</h1>
    //     </div>
    // )

    return React.createElement('div',
                                {id:'hello',className: 'dummyclass'},
                                React.createElement('h1',null,"hello user"))
}

export default Hello;

//with and without jsx