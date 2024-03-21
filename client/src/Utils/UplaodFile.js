import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useState, useEffect } from "react";
import { app } from "./Firebase";

export const useUpload = ({ file }) => { 
    const [progress, setProgress] = useState(); 
    const [downloadUrl, setDownloadUrl] = useState();

    useEffect(() => { 
        if (file) {
            try {
                const storage = getStorage(app);
                const fileName = new Date().getTime() + file.name;
                const storageRef = ref(storage, fileName);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        setProgress(Math.round(progress).toString());
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
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        setDownloadUrl(downloadURL);
                    }
                );
            } catch (error) {
                console.error(error);
            }
        }
    }, [file]); 

    return { progress, uploadFile: () => { }, downloadUrl };
};
