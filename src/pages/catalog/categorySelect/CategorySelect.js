import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {menuData} from "../../../context/menuData";
import {useNavigate, useParams} from "react-router-dom";

 function CategorySelect() {
     const {category} = useParams()
     const nav = useNavigate()
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="category"
                    onChange={(e) => nav(`/catalog/${e.target.value}`)}
                >
                    <MenuItem  value='all'>all categories</MenuItem>
                    {
                        menuData.map(item => (
                        <MenuItem key={item.en} value={item.en}>{item.ru}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
}
export default CategorySelect;