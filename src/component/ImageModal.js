import { Dialog, DialogContent } from '@material-ui/core'
import React from 'react'

export default function ImageModal({ openImageData, openImage, setOpenImage }) {
    // console.log("-0-0-0-0-0-", openImageData?.CategoryImage);
    // console.log("-0-0-0-0-0-", openImageData?.image);
    return (
        <Dialog open={openImage} onClose={() => setOpenImage(false)}>
            <DialogContent>
                <img src={openImageData?.image ? openImageData?.image : openImageData?.CategoryImage} style={{ width: "100%" }} />
            </DialogContent>
        </Dialog>
    )
}
