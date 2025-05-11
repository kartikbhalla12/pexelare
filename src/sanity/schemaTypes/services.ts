import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title for the services section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titleHighlight",
      title: "Title Highlight",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'The subtitle/description text below the main title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'serviceItems',
      title: 'Service Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Service Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField( {
              name: "icon",
              title: "Button Icon",
              type: "image",
              options: {
                accept: "image/svg+xml",
              },
              description: "Upload an SVG icon for the button",
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "link",
          title: "Button Link",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "icon",
          title: "Button Icon",
          type: "image",
          options: {
            accept: "image/svg+xml",
          },
          description: "Upload an SVG icon for the button",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
