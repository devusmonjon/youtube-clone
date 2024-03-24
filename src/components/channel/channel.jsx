import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Channel = () => {
    const params = useParams();
    console.log(params);
  return (
    <Link to={"/"}>
        <Button>Home</Button>
    </Link>
  )
}

export default Channel