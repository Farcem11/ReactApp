import React, { Component } from 'react';

export default class TaskFormInput extends Component
{
    render()
    {
        return (
            <div className="form-group">
                <input
                    type = "text"
                    name = {this.props.name}
                    onChange = {this.props.setTask}
                    className = "form-control"
                    placeholder = {this.props.placeholder}
                />
            </div>
        );
    };
};