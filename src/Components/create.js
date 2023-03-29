import { Button, Checkbox, Form } from 'semantic-ui-react'
import { React, useState } from 'react';
import axios from 'axios';

const Create = () => {
    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [grade, setGrade] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://638ef0ea4ddca317d7e9e540.mockapi.io/student`,{
            name,
            rollNo,
            grade,
            checkbox
        })
    }
    return(
        <>
            <Form className="create-form">
            <Form.Field>
                <label>Name</label>
                <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Roll No</label>
                <input placeholder='Roll No' onChange={(e) => setRollNo(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Class</label>
                <input placeholder='Class' onChange={(e) => setGrade(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
        </>
    )
}

export default Create;