import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    margin: 1rem auto;
    background: orange;
    width: 50vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
`;

const Input = styled.input`
    margin: 0.5rem;
    border: none;
    outline: none;
    border-radius: 3px;
    &[placeholder]{
        font-style: italic;
        padding: 0.5rem;
    }
    transition: all 0.2 ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;

const SubmitButton = styled.button`
    border: none;
    background: black;
    color: white;
    padding: 0.5rem;
    border-radius: 3px;
    transition: all 0.2 ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
`;

const AddSong = props => {
    const [input, setInput] = useState({title: '', artist: ''});

    const handleInputChange = e => {
        setInput({...input, [e.target.name] : e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(input);
        props.addSong(input);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <legend>Add Song</legend>
                <Input type='text'
                    placeholder='title'
                    value={input.title}
                    name='title'
                    onChange={handleInputChange} 
                />

                <Input type='text'
                    placeholder='artist'
                    value={input.artist}
                    name='artist'
                    onChange={handleInputChange}  
                />

                <SubmitButton >Submit</SubmitButton>

            </Form>
        </div>
    )
}

export default AddSong;