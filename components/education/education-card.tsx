import { Icons } from "@/components/common/icons";
import { EducationInterface } from "@/config/education";

interface EducationCardProps {
  education: EducationInterface;
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="w-full rounded-lg border bg-background p-4 sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-border bg-muted sm:h-12 sm:w-12">
          <Icons.education className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <h3 className="text-base font-bold text-foreground sm:text-lg">
              {education.degree}
            </h3>
            <span className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              {education.dateLabel}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            <span className="font-medium">{education.institution}</span>
            {" • "}
            {education.location}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {education.gpaLabel}
          </p>
          {education.honors && (
            <p className="mt-1 text-sm text-muted-foreground">
              {education.honors}
            </p>
          )}
          <div className="mt-3 flex flex-wrap gap-1">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
