import React from 'react';

export class Todo extends React.Component {

    render() {
        const {text,priority,dueDate} = this.props;
        return (
            <tr>
                <td>{text}</td>
                <td>{priority}</td>
                <td>{dueDate.toLocaleDateString()}</td>
            </tr>
        );
    }

}