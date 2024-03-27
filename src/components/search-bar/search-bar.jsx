import { IconButton, Paper } from "@mui/material";
import { colors } from "../../constants/colors";
import { Search } from "@mui/icons-material";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(value);
        if (value) {
            navigate(`/search/${value}`);
            setValue("");
        }
    };

    return (
        <Paper
            component={"form"}
            onSubmit={(e) => submitHandler(e)}
            sx={{
                border: `1px solid ${colors.secondary}`,
                paddingLeft: 2,
                boxShadow: "none",
                mr: 5,
            }}
        >
            <input
                type="text"
                placeholder="Search..."
                className="search-bar"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <IconButton type="submit">
                <Search />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
