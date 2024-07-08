import cloudinary from "cloudinary";
import { SearchResultProps } from "../gallery/page";
import CloudinaryImage from "@/components/ui/cloudinaryImage";
import ForceRefresh from "@/lib/forceRefresh";
import FavoritesList from "./favoritesList";

export default async function FavoritesPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=liked")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResultProps[]};

    


  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl">Liked</h1>
        </div>

        {/* {results.resources.toString()} */}


        {results.resources.length > 0 && (
          <FavoritesList
          initialResorses={results.resources}/>
        )}

       
      </div>
    </section>
  );
}
