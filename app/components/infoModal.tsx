"use client"
import React, {useCallback, useEffect, useState} from "react";
import { AiOutlineClose } from 'react-icons/ai'
import FavoriteBtn from './favoriteBtn'
import PlayBtn from "./playBtn";
import useInfoModalStore from '@/hooks/infoModalStore';

interface InfoModalProps{
    visible?: boolean
    onClose: any
    data?:any
}

const InfoModal: React.FC<InfoModalProps> = ({visible, onClose, data}) => {
    const [isVisible, setIsVisible] = useState<boolean>(!!visible);
    const [modalData, setModalData] = useState<any>();
    const { movieId } = useInfoModalStore();

    const filterMovie = () => {
        var newArray = data.filter(function (el:any) {
            return el.id == movieId;
          });
        console.log(newArray)
          return newArray[0]
    }
    
    useEffect(() => {
        setIsVisible(!!visible);
        if(visible){
            setModalData(filterMovie())
        }
      }, [visible]);
    
    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose]);

    if (!visible) {
        return null;
    }

    return(
            <div className={`${isVisible?'':'hidden'} z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0`}>
            <div
                className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
                <div className={`${isVisible ? 'scale-100' : 'scale-0'} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}>
                    <div className="relative h-96">
                        <video 
                            className="w-full brightness-[60%] h-full object-cover"
                            autoPlay
                            muted
                            loop
                            poster={modalData?.thumbnailUrl} 
                            src={modalData?.videoUrl}></video>
                        <div onClick={handleClose} className="
                            cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full
                            bg-black/70 flex items-center justify-center
                        ">
                            <AiOutlineClose className="text-white" size={20}/>
                        </div>
                        <div className="
                            absolute
                            bottom-[10%]
                            left-10
                        ">
                            <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                                {modalData?.title}
                            </p>
                            <div className="flex flex-row gap-4 items-center">
                                <PlayBtn/>
                                <FavoriteBtn movieId={modalData?.movieId}/>
                            </div>
                        </div>
                    </div>
                    <div className="px-12 py-8">
                        <p className="text-green-400 font-semibold text-lg">
                            New
                        </p>
                        <p className="text-white text-lg">
                            {modalData?.duration}
                        </p>
                        <p className="text-white text-lg">
                            {modalData?.genre}
                        </p>
                        <p className="text-white text-lg">
                            {modalData?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoModal