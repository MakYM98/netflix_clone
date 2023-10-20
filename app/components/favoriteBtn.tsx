import React, {useCallback, useMemo} from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

interface FavoriteBtnProps {
    movieId: string;
}

const FavoriteBtn: React.FC<FavoriteBtnProps> = ({ movieId }) => {
    return(
        <div className='cursor-pointer group/item h-6 w-6 lg:w-10 lg:h-10
            border-white border-2 rounded-full flex justify-center items-center
            transition hover:border-neutral-300
        '>
            <AiOutlinePlus className="text-white" size={25}/>
        </div>
    )
}

export default FavoriteBtn