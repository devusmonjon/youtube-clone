import { IconButton, Paper } from "@mui/material"
import { colors } from "../../constants/colors"
import { Search } from "@mui/icons-material"

const SearchBar = () => {
  return (
    <Paper
    component={"form"}
    sx={{
        border: `1px solid ${colors.secondary}`,
        paddingLeft: 2,boxShadow: "none"
        }}>
        <input type="text" placeholder="Search..." className="search-bar" />
        <IconButton type="submit">
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar