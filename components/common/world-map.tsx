"use client";

import { geoNaturalEarth1, geoPath } from "d3-geo";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { feature } from "topojson-client";
import countries110m from "world-atlas/countries-110m.json";

export interface GeoPoint {
  label: string;
  coordinates: [number, number];
}

export interface HighlightedCountry {
  /** ISO 3166-1 numeric country code, e.g. "840" for the United States. */
  id: string;
  label: string;
}

interface WorldMapProps {
  /** Journey path: rendered as connected arcs in order, with a pulsing marker on the last point. */
  points: GeoPoint[];
  /** Extra labeled markers shown on the map without being part of the connecting path. */
  markers?: GeoPoint[];
  highlightedCountries: HighlightedCountry[];
  legendLabel?: string;
  className?: string;
}

const WIDTH = 800;
const HEIGHT = 400;

export function WorldMap({
  points,
  markers = [],
  highlightedCountries,
  legendLabel = "Projects",
  className,
}: WorldMapProps) {
  const highlightedIds = useMemo(
    () => new Set(highlightedCountries.map((country) => country.id)),
    [highlightedCountries]
  );

  const { countryFeatures, projectedPoints, projectedMarkers, arcPaths } =
    useMemo(() => {
      const countriesGeo = feature(
        countries110m as unknown as Parameters<typeof feature>[0],
        (countries110m as { objects: { countries: unknown } }).objects
          .countries as Parameters<typeof feature>[1]
      );
      const features =
        "features" in countriesGeo ? countriesGeo.features : [countriesGeo];
      const featureCollection = {
        type: "FeatureCollection",
        features,
      } as const;

      const projection = geoNaturalEarth1().fitSize(
        [WIDTH, HEIGHT],
        featureCollection
      );
      const path = geoPath(projection);

      const projected = points.map((point) => ({
        ...point,
        xy: projection(point.coordinates),
      }));
      const projectedExtra = markers.map((point) => ({
        ...point,
        xy: projection(point.coordinates),
      }));

      const arcs: string[] = [];
      for (let i = 0; i < projected.length - 1; i++) {
        const a = projected[i].xy;
        const b = projected[i + 1].xy;
        if (a && b) {
          const [x1, y1] = a;
          const [x2, y2] = b;
          const midX = (x1 + x2) / 2;
          const midY = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.25;
          arcs.push(`M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`);
        }
      }

      return {
        countryFeatures: features.map((f) => ({
          id: String(f.id),
          d: path(f),
        })),
        projectedPoints: projected,
        projectedMarkers: projectedExtra,
        arcPaths: arcs,
      };
    }, [points, markers]);

  return (
    <div className="flex flex-col items-center gap-3">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className={className}
        role="img"
        aria-label={`Map highlighting ${highlightedCountries.map((country) => country.label).join(", ")}`}
      >
        {countryFeatures.map(
          ({ id, d }, index) =>
            d && (
              <path
                key={`${id}-${index}`}
                d={d}
                strokeWidth={0.5}
                className={
                  highlightedIds.has(id)
                    ? "fill-primary stroke-border"
                    : "fill-muted stroke-border"
                }
              />
            )
        )}

        {arcPaths.map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            className="stroke-foreground"
            strokeWidth={1.5}
            strokeDasharray="4 3"
            strokeLinecap="round"
          />
        ))}

        {projectedPoints.map(
          (point, index) =>
            point.xy && (
              <g
                key={point.label}
                transform={`translate(${point.xy[0]}, ${point.xy[1]})`}
              >
                {index === projectedPoints.length - 1 && (
                  <motion.circle
                    r={6}
                    className="fill-foreground"
                    animate={{ scale: [1, 1.8, 1], opacity: [1, 0.4, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
                <circle
                  r={6}
                  strokeWidth={2}
                  className="fill-foreground stroke-background"
                />
                <text
                  y={-14}
                  textAnchor="middle"
                  className="fill-foreground text-[22px] sm:text-[15px] font-semibold sm:font-medium"
                  style={{
                    paintOrder: "stroke",
                    stroke: "hsl(var(--background))",
                    strokeWidth: 6,
                    strokeLinejoin: "round",
                  }}
                >
                  {point.label}
                </text>
              </g>
            )
        )}

        {projectedMarkers.map(
          (point) =>
            point.xy && (
              <g
                key={point.label}
                transform={`translate(${point.xy[0]}, ${point.xy[1]})`}
              >
                <circle
                  r={6}
                  strokeWidth={2}
                  className="fill-foreground stroke-background"
                />
                <text
                  y={-14}
                  textAnchor="middle"
                  className="fill-foreground text-[22px] sm:text-[15px] font-semibold sm:font-medium"
                  style={{
                    paintOrder: "stroke",
                    stroke: "hsl(var(--background))",
                    strokeWidth: 6,
                    strokeLinejoin: "round",
                  }}
                >
                  {point.label}
                </text>
              </g>
            )
        )}
      </svg>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="h-3 w-3 shrink-0 rounded-sm bg-primary" />
        {legendLabel}
      </div>
    </div>
  );
}
