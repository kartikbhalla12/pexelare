import { type SchemaTypeDefinition } from 'sanity'
import hero from '@/sanity/schemaTypes/hero'
import vision from '@/sanity/schemaTypes/vision'
import linkedin from '@/sanity/schemaTypes/linkedin'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, vision, linkedin],
}
