import { useState } from "react";
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 35px auto 0 auto;
    & > div {
        margin-top: 20px
    }
`

const addDefaultValue = {
    name: "",
    email: "",
    phone: "",
    address: "",
    country: ""
}

const AddUser = () =>{

    const [user, setUser] = useState(addDefaultValue);

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }
    const addUserDetails = () => {
        
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <InputLabel>Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="address" />
            </FormControl>
            <FormControl>
                <InputLabel>Country</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="country" />
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    );
}

export default AddUser;