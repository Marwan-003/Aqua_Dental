"use client";
import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string, defaultMatches = false): boolean {
  const subscribe = (callback: () => void) => {
    const media = window.matchMedia(query);
    media.addEventListener("change", callback);
    return () => media.removeEventListener("change", callback);
  };

  const getSnapshot = () => window.matchMedia(query).matches;
  const getServerSnapshot = () => defaultMatches;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}