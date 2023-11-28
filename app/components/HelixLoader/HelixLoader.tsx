"use client";
import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    async function getLoader() {
      const { helix } = await import("ldrs");
      helix.register();
    }
    getLoader();
  }, []);
  return <l-helix size="45" speed="2.7" color="black"></l-helix>;
}
