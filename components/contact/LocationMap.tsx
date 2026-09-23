"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { cn } from "@/lib/utils";

interface LocationMapProps {
  lat: number;
  lng: number;
  companyName: string;
  address: string;
  className?: string;
}

/**
 * Interactive OpenStreetMap/Leaflet map — see REVISION_V0.8.md part A.
 * Client-only: Leaflet touches `window`, so it's imported inside
 * useEffect rather than at module scope (this component is never
 * rendered during SSR's static HTML pass, only hydrated in the
 * browser). Falls back to a plain address+links box if the tiles
 * never load (e.g. blocked network) — see LocationFallback below.
 */
export function LocationMap({ lat, lng, companyName, address, className }: LocationMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let map: import("leaflet").Map | undefined;
    let failTimer: ReturnType<typeof setTimeout> | undefined;
    let handleFocusOut: ((e: FocusEvent) => void) | undefined;
    let container: HTMLElement | undefined;

    async function init() {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current) return;

      map = L.map(containerRef.current, {
        center: [lat, lng],
        zoom: 16,
        scrollWheelZoom: false,
      });

      const tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
        maxZoom: 19,
      });
      tileLayer.addTo(map);

      let tileLoadCount = 0;
      let tileErrorCount = 0;
      tileLayer.on("tileload", () => {
        tileLoadCount++;
      });
      tileLayer.on("tileerror", () => {
        tileErrorCount++;
      });
      tileLayer.on("load", () => {
        if (!cancelled && tileLoadCount === 0 && tileErrorCount > 0) setLoadFailed(true);
      });
      // Belt-and-suspenders: if the tile layer's own "load" event never
      // fires (network hangs rather than erroring), fall back anyway.
      failTimer = setTimeout(() => {
        if (!cancelled && tileLoadCount === 0) setLoadFailed(true);
      }, 8000);

      // A custom divIcon avoids Leaflet's default marker image paths
      // (marker-icon.png / marker-shadow.png), which 404 once bundled —
      // Leaflet computes their URL relative to leaflet.js's own runtime
      // location, which doesn't resolve correctly under Next.js.
      const markerIcon = L.divIcon({
        className: "kts-map-marker",
        html: '<span style="display:block;width:16px;height:16px;border-radius:9999px;background:var(--color-accent);border:3px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.4);"></span>',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
        popupAnchor: [0, -8],
      });
      const marker = L.marker([lat, lng], { icon: markerIcon }).addTo(map);
      marker.bindPopup(`<strong>${companyName}</strong><br/>${address}`);

      // Scroll-wheel zoom is off by default so the map never hijacks
      // page scroll. Enable it once the user clicks into the map,
      // disable it again once focus leaves the map entirely.
      map.on("click", () => map?.scrollWheelZoom.enable());
      container = map.getContainer();
      handleFocusOut = (e: FocusEvent) => {
        const next = e.relatedTarget as Node | null;
        if (!next || !container?.contains(next)) {
          map?.scrollWheelZoom.disable();
        }
      };
      container.addEventListener("focusout", handleFocusOut);
    }

    init();

    return () => {
      cancelled = true;
      clearTimeout(failTimer);
      if (container && handleFocusOut) container.removeEventListener("focusout", handleFocusOut);
      map?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lng]);

  if (loadFailed) {
    return (
      <LocationFallback
        companyName={companyName}
        address={address}
        lat={lat}
        lng={lng}
        className={className}
      />
    );
  }

  return (
    <div>
      <div
        ref={containerRef}
        data-location-map="true"
        role="application"
        aria-label={`Map showing the location of ${companyName}`}
        className={cn(
          "h-[320px] md:h-[400px] w-full rounded-[var(--radius-lg)] border border-[var(--color-border)] overflow-hidden",
          className
        )}
      />
      <MapLinks lat={lat} lng={lng} className="mt-3 justify-start" />
    </div>
  );
}

export function LocationFallback({
  companyName,
  address,
  lat,
  lng,
  className,
}: {
  companyName: string;
  address: string;
  lat: number;
  lng: number;
  className?: string;
}) {
  return (
    <div
      data-location-map="true"
      className={cn(
        "flex h-[320px] md:h-[400px] w-full flex-col items-center justify-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 text-center",
        className
      )}
    >
      <p className="text-sm font-medium text-[var(--color-text)]">{companyName}</p>
      <p className="text-sm text-[var(--color-text-muted)]">{address}</p>
      <MapLinks lat={lat} lng={lng} />
    </div>
  );
}

export function MapLinks({ lat, lng, className }: { lat: number; lng: number; className?: string }) {
  const query = `${lat},${lng}`;
  return (
    <div className={cn("flex flex-wrap justify-center gap-x-4 gap-y-1", className)}>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[var(--color-accent)] hover:underline"
      >
        Open in Google Maps
      </a>
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[var(--color-accent)] hover:underline"
      >
        Get directions
      </a>
    </div>
  );
}
