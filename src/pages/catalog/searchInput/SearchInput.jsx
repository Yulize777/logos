import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchInput({title,setTitle}) {
    return (
        <Box

            component="form"
            noValidate
            autoComplete="off"
        >
            <TextField value={title} onChange={(e) => setTitle(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
    );
}