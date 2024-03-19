import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { app } from "./Firebase";

export const useUplaod = ({ file }) => {
    const [per, setPer] = useState()
    const [donwlaodUrl, setDonwlaodUrl] = useState()

    const UploadFile = () => {
        try {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uplaodTask = uploadBytesResumable(storageRef, file);

            uplaodTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setPer(Math.round(progress).toString());
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                () => { },
                async () => {
                    const downloadURL = await getDownloadURL(uplaodTask.snapshot.ref);
                    setDonwlaodUrl(downloadURL)
                }
            );
        } catch (error) {
            console.error(error);
        }
    }

    return { per, UploadFile, donwlaodUrl }
}