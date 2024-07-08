"use client";

import cloudinary from "cloudinary";
import { SearchResultProps } from "../gallery/page";
import CloudinaryImage from "@/components/ui/cloudinaryImage";
import ForceRefresh from "@/lib/forceRefresh";
import { useEffect, useState } from "react";

export default function FavoritesList({initialResorses,} : {initialResorses: SearchResultProps[];}) {

    const [resorses, setResorses] = useState(initialResorses);

    useEffect(() => {	
        setResorses(initialResorses);
    }, [initialResorses]);

  return (
        <div className="grid grid-cols-4 gap-4">
          {resorses.map((result) => (
            <div key={result.public_id}>
              <CloudinaryImage
                key={result.public_id}
                imageData={result}
                alt="Description of my image"
                width="960"
                height="600"
                onUnLike={(unhertedResource) => {
                    setResorses(currentResorses => {
                        return currentResorses.filter(resourse => resourse.public_id !== unhertedResource.public_id);
                    }
                    );  
                }
                }      
              />
            </div>
          ))}
        </div>

  );
}
