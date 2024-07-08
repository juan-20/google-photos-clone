"use client";

import HeartIcon from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import React, { ComponentProps, useState, useTransition } from "react";
import MarkAsFavoriteAction from "../../app/gallery/actions";
import { SearchResultProps } from "../../app/gallery/page";
import { FullHeart } from "@/components/icons/full-heart";

export default function CloudinaryImage(
  props: { imageData: SearchResultProps; onUnLike?: (unhertedResource: SearchResultProps) => void; } & Omit<CldImageProps, "src">) {
  const [transition, startTransition] = useTransition();

  const { imageData, onUnLike } = props;

  const [isFavorite, setIsFavorite] = useState(
    imageData.tags.includes("liked")
  );

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorite ? (
        <FullHeart
          onClick={() => {
            startTransition(() => {
              setIsFavorite(false);
              MarkAsFavoriteAction(imageData.public_id, false);
              onUnLike?(imageData):null;
            });
          }}
          className="absolute top-2 right-2 hover:stroke-white-500 stroke-red-600 text-red-600 fill-red-700 cursor-pointer"
        />
      ) : (
        <HeartIcon
          onClick={() => {
            setIsFavorite(true);
            startTransition(() => {
              MarkAsFavoriteAction(imageData.public_id, true);
            });
          }}
          className="absolute top-2 right-2 hover:stroke-red-500 stroke-black cursor-pointer"
        />
      )}
    </div>
  );
}
