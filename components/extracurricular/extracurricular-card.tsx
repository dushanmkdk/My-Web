import { GalleryGrid } from "@/components/common/gallery-grid";
import { Icons } from "@/components/common/icons";
import { ExtracurricularInterface } from "@/config/extracurricular";

interface ExtracurricularCardProps {
  item: ExtracurricularInterface;
}

export default function ExtracurricularCard({
  item,
}: ExtracurricularCardProps) {
  const Icon = Icons[item.icon];

  return (
    <div className="w-full rounded-lg border bg-background p-4 sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-border bg-muted sm:h-12 sm:w-12">
          <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-foreground sm:text-lg">
            {item.category}
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          {item.images.length > 0 && (
            <GalleryGrid
              images={item.images}
              alt={item.category}
              className="mt-4"
            />
          )}
        </div>
      </div>
    </div>
  );
}
