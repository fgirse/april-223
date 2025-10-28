import Image from "next/legacy/image";
import {Cloudinary, Transformation} from "@cloudinary/url-gen";
import { backgroundRemoval, cartoonify } from "@cloudinary/url-gen/actions/effect";
// Import required actions.

import {byAngle} from "@cloudinary/url-gen/actions/rotate"

// Import the required actions and qualifiers.
import {fill, scale} from "@cloudinary/url-gen/actions/resize";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";

// Import required values.
import {image, text} from "@cloudinary/url-gen/qualifiers/source";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";
import {autoGravity, compass} from "@cloudinary/url-gen/qualifiers/gravity";
import { TextAlignment } from "@cloudinary/url-gen/qualifiers";
import { hue } from "@cloudinary/url-gen/actions/adjust";
// Create and configure your Cloudinary instance.

export default function HeroImage() {
const cld = new Cloudinary({
  cloud: {
    cloudName: 'Carlo2024'
  }
}); 



// Use the image with public ID, 'sample'.
const myImage = cld.image('jfvc9uacixhhudatjnud',);


// Transform the image.
myImage

.resize(fill(200,200))
.effect(cartoonify(20))

.roundCorners(byRadius(10))
  
  .rotate(byAngle(0))
  .format('png');
  

  // Return the delivery URL
  const myUrl = myImage.toURL()
  return(
    
    
    <div className="flex flex-col items-center">
    
      <Image src={myUrl} width={200} height={200} alt="Transformed Image" className="text-white text-left" />
    </div>
    
    
  );
}