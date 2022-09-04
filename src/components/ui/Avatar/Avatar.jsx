import {useRef, useState} from 'react';
import {Cropper} from 'react-cropper';
import {Button, Form} from 'react-bootstrap';
import styles from './Avatar.module.scss';

export default function Avatar(props) {
   const cropperRef = useRef(null);
   const inputRef = useRef(null);
   const [cropping, setCropping] = useState(false);
   const [cropData, setCropData] = useState(props.avatarData.cropData);
   const [croppedUrl, setCroppedUrl] = useState(props.avatarData.croppedUrl);
   const [originalUrl, setOriginalUrl] = useState(props.avatarData.originalUrl);

   const onSelectImg = () => {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
         setOriginalUrl(reader.result);
         startCropping();
      }, false);

      reader.readAsDataURL(inputRef.current.files[0]);
   };

   const saveCropData = () => {
      const imageElement = cropperRef.current;
      const cropper = imageElement.cropper;

      setCroppedUrl(cropper.getCroppedCanvas().toDataURL());
      setCropData(cropper.getData());
      setCropping(false);

      props.changeCropData({
         cropData,
         originalUrl,
         croppedUrl
      });
   };

   const startCropping = () => {
      setCropping(true);
   };

   const deleteImg = () => {
      setCropping(false);
      setCroppedUrl('');
      setOriginalUrl('');
      setCropData(null);
   };

   const onReadyCropper = () => {
      const imageElement = cropperRef.current;
      const cropper = imageElement.cropper;

      cropper.setData(cropData);
   };

   if (cropping) {
      return  <div className={styles.cropperWrap}>
            <Cropper
              src={originalUrl}
              style={{ height: 300, width: 300 }}
              // Cropper.js options
              initialAspectRatio={16 / 9}
              minCropBoxWidth={100}
              minCropBoxHeight={100}
              zoomable={false}
              ready={onReadyCropper}
              viewMode={1}
              guides={false}
              ref={cropperRef}
            />
            <div className="d-flex justify-content-end">
               <Button variant="danger" className="d-block ms-auto ms-2 mt-3" type="button" onClick={deleteImg}>Delete</Button>
               <Button variant="primary" className="d-block ms-2 mt-3" type="button" onClick={saveCropData}>Save</Button>
            </div>

         </div>
   } else {
      if (croppedUrl) {
         return <div className={styles.cropperWrap}>
            <img className="w-100 " src={croppedUrl}/>
            <div className="d-flex justify-content-end">
               <Button variant="danger" className="d-block ms-auto ms-2 mt-3" type="button" onClick={deleteImg}>Delete</Button>
               <Button variant="primary" className="d-block ms-2 mt-3" type="button" onClick={startCropping}>Crop</Button>
            </div>
         </div>
      } else {
        return <div className={styles.cropperWrap}>
             <Form.Group className="mb-3">
               <Form.Label>{props.fieldName}</Form.Label>
               <Form.Control ref={inputRef} type="file" accept="image/png, image/jpeg" onChange={onSelectImg} />
            </Form.Group>
         </div>
      }
   }
}
