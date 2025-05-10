import { defineField, defineType } from 'sanity'

const heroSchema = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleHighlight',
      title: 'Title Highlight',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'title',
          title: 'Image Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Image Subtitle',
          type: 'text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'cardTitle',
          title: 'Card Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'cardSubtitle',
          title: 'Card Subtitle',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'Primary CTA Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
        },
        {
          name: 'icon',
          title: 'Button Icon',
          type: 'image',
          options: {
            accept: 'image/svg+xml'
          },
          description: 'Upload an SVG icon for the button',
        },
      ],
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Secondary CTA Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
        },
        {
          name: 'icon',
          title: 'Button Icon',
          type: 'image',
          options: {
            accept: 'image/svg+xml'
          },
          description: 'Upload an SVG icon for the button',
        },
      ],
    }),
  defineField({
    name: 'trustedCompanies',
    title: 'Trusted Companies Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Section Description',
        type: 'text',
      },
      {
        name: 'companies',
        title: 'Company Logos',
        type: 'array',
        of: [{ type: 'image' }],
        validation: Rule => Rule.max(3).min(3),
        description: 'Upload exactly 3 company logos',
      },
    ],
  }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})

export default heroSchema 