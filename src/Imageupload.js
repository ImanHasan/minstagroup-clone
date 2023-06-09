import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import { storage, db } from './firebase';
import { upload } from '@testing-library/user-event/dist/upload';



function ImageUpload({username}) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progress)
      },
      (error) => {
        // errror function
        console.log(error)
        alert(error.message)
      },
      () => {
        // complete function
        storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          // post image inside db
          db.collection("post").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            caption: caption,
            imageUrl: url,
            username: username
          });

          setProgress(0)
          setCaption("")
          setImage(null) 

        })
      }
    )
  }

  return (
    <div>
     {/* i want to have */}
    {/* Caption input */}
    {/* File picker */}
    {/* post button */}

    <progress value={progress} max="100"/>
    <input type='text' placeholder='Enter a caption....' onChange={event => setCaption(event.target.value)} value=" " />
    <input type='file' onChange={handleChange}/>
    <button onClick={handleUpload}>
      Upload
    </button>

    </div>
   
  )
}

export default ImageUpload