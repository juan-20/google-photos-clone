import cloudinary from "cloudinary";
import { SearchResultProps } from "../gallery/page";
import CloudinaryImage from "@/components/ui/cloudinaryImage";
import ForceRefresh from "@/lib/forceRefresh";

export default async function FavoritesPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=liked")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResultProps[] };

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl">Liked</h1>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <div key={result.public_id}>
              <CloudinaryImage
                key={result.public_id}
                imageData={result}
                path={"/favorites"}
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
