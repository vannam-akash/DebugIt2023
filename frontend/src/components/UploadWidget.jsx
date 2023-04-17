import React,{ useEffect,useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

function UploadWidget({setImgs,imgs}) {
    const widgetRef = useRef();
    const [countFiles,setCountFiles] = useState();
  
    useEffect(() => {
      widgetRef.current = window.cloudinary.createUploadWidget({
        cloudName: 'dos1fnsba',
        uploadPreset: 'dcymrd1b'
      }, (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Upload success:", result.info);
          if (imgs) {
            setImgs(prevImgs => [...prevImgs, result.info.secure_url]);
          } else {
            setImgs([result.info.secure_url]);
          }
          // console.log(imgs);
        //   setImgs(result.info.secure_url);
        }
      });
  
    }, []);

    useEffect(() => {
      console.log(imgs);
    }, [imgs]);
  
    const handleButtonClick = () => {
      widgetRef.current.open();
    }
  
    return (
      <>
          <Button className="ms-3" onClick={handleButtonClick}>
            Choose file(s)...
          </Button>
      </>
    );
  }
  
  export default UploadWidget;