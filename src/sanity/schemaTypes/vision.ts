import { defineField, defineType } from "sanity";

const visionSchema = defineType({
  name: "vision",
  title: "Vision Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titleHighlight",
      title: "Title Highlight",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Section Image",
      type: "object",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "title",
          title: "Image Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "subtitle",
          title: "Image Subtitle",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Feature Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Feature Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "icon",
              title: "Feature Icon",
              type: "image",
              options: {
                accept: "image/svg+xml",
              },
              description: "Upload an SVG icon for the feature",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(2).max(2),
    }),
    defineField({
      name: "ctaPrimary",
      title: "Primary CTA Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "string",
        },
        {
          name: "link",
          title: "Button Link",
          type: "string",
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
    defineField({
      name: "ctaSecondary",
      title: "Secondary CTA Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "string",
        },
        {
          name: "link",
          title: "Button Link",
          type: "string",
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
      title: "title",
      media: "image",
    },
  },
});

export default visionSchema;
