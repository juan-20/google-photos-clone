import { Button } from "@/components/ui/button";
import { CldImage, CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";
import UploadButton from "./uploadButton";
import cloudinary from "cloudinary";
import CloudinaryImage from "../../components/ui/cloudinaryImage";

export type SearchResultProps = {
  public_id: string;
  tags: string[];
};

async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(5)
    .execute()) as { resources: SearchResultProps[] };

  console.log(results);

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl">Gallery</h1>
          <UploadButton />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <div key={result.public_id}>
              <CloudinaryImage
                key={result.public_id}
                imageData={result}
                alt="Description of my image"
                width="960"
                height="600"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;
