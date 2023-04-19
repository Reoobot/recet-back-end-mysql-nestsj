import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';



function Button() {
    const [count, setCount] = useState(0)

  return (
    <div>
     

      <button onClick={() => setCount((count) => count + 1)} className='button'>
      <FavoriteIcon /> {count}
        </button>
     
    </div>
  )
}

export default Button
