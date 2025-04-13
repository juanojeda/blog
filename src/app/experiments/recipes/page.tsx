import { Metadata } from "next";
import CommonLayout from "@/components/CommonLayout";

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    title: "Juan Ojeda — Recipes",
    description: "A collection of recipes and cooking tips by Juan Ojeda.",
  };

  return metadata;
}
