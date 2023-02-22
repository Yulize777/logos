import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {menuData} from "../../../context/menuData";
import {useNavigate, useParams} from "react-router-dom";

function OrderSelect({order,setOrder}) {
    const {category} = useParams()
    const nav = useNavigate()
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">sort</InputLabel>
                <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={order}
                    label="category"
                    onChange={(e) => setOrder(e.target.value)}
                >
                    <MenuItem  value='default'>by default</MenuItem>
                    <MenuItem  value='desc'>descending</MenuItem>
                    <MenuItem  value='asc'>ascending</MenuItem>
                    <MenuItem  value='abs'>by alphabet</MenuItem>
                    <MenuItem  value='weight'>by weight</MenuItem>
                    <MenuItem  value='calories'>by calories</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
export default OrderSelect;