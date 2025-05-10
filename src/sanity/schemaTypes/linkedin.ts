import { defineField, defineType } from "sanity";

const linkedinSchema = defineType({
  name: "linkedin",
  title: "LinkedIn Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
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
      name: "description",
      title: "Section Description",
      type: "text",
      validation: (Rule) => Rule.required(),
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
          type: "url",
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
      title: "title",
    },
  },
});

export default linkedinSchema;
