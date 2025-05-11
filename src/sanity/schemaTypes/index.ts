import { type SchemaTypeDefinition } from "sanity";
import hero from "@/sanity/schemaTypes/hero";
import vision from "@/sanity/schemaTypes/vision";
import linkedin from "@/sanity/schemaTypes/linkedin";
import testimonials from "@/sanity/schemaTypes/testimonials";
import services from "@/sanity/schemaTypes/services";
import projects from "@/sanity/schemaTypes/projects";
import project from "@/sanity/schemaTypes/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, vision, linkedin, testimonials, services, projects, project],
};
