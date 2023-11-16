"use client"
import Image from 'next/image';
import React, { useRef } from 'react'
import IconAddPhoto from '@/img/icon-add-photo.svg'

const SelectFile = () => {
    const fileInputRef: any = useRef();

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="card_add-photo-video">
            <button onClick={handleButtonClick}>
                <Image src={IconAddPhoto} alt="" />
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    style={{ display: 'none' }}
                />
            </button>
        </div>
    )
}

export default SelectFile