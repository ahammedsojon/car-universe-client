import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
const AddReview = () => {
    const { user, token } = useAuth();
    const [userReview, setUserReview] = useState({name: user?.displayName, email: user?.email, img: user?.photoURL, feedback: '', rating: ''})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...userReview};
        newReview[field] = value;
        setUserReview(newReview)
    }
    const handleOnSubmit = e => {
        e.preventDefault();
       axios.put(`https://shrouded-tundra-85918.herokuapp.com/reviews/${user?.email}`, {
           review: userReview
       }, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
       .then(res => {
           console.log(res);
           if(res.data.modifiedCount || res.data.upsertedCount || res.data.matchedCount){
               alert('Your review added successfully');
               e.target.reset();
           }
       })
    }
    return (
        <Box>
            <Typography variant="h4" sx={{mb:2}}>Give a review</Typography>
            <Box style={{ width: 200, height: 3, background: '#cd6621', margin: '0 auto'}}></Box>
            <Box sx={{mb: 5}}></Box>
            <form onSubmit={handleOnSubmit} style={{ width: '75%', margin: '0 auto' }}>
                <TextField
                sx={{mb:2}}
                    disabled
                    label="Name"
                    variant="outlined"
                    defaultValue={user?.displayName}
                    fullWidth
                />
                <TextField
                sx={{mb:2}}
                    disabled
                    label="Email"
                    variant="outlined"
                    defaultValue={user?.email}
                    fullWidth
                />
                <TextField
                sx={{mb:2}}
                    disabled
                    label="Email"
                    variant="outlined"
                    defaultValue={user?.photoURL}
                    fullWidth
                />
                <TextField
                sx={{mb:2}}
                    onBlur={handleOnBlur}
                    label="Give a feedback"
                    name="feedback"
                    variant="outlined"
                    multiline
                    minRows={3}
                    fullWidth
                    required
                />
                <TextField
                sx={{mb:2}}
                    onBlur={handleOnBlur}
                    label="Give a rating between 1 to 5"
                    type="number"
                    name="rating"
                    variant="outlined"
                    fullWidth
                    required
                />
                <Button style={{width: '100%'}} type="submit" variant="contained">Add Review</Button>
            </form>
        </Box>
    );
};

export default AddReview;