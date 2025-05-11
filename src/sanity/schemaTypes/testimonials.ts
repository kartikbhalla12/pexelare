import { defineField, defineType } from "sanity";

const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonial Section',
  type: 'document',
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
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "object",
        fields: [
          { name: "name", title: "Name", type: "string" },
          { name: "designation", title: "Designation", type: "string" },
          { name: "company", title: "Company", type: "string" },
          { name: "image", title: "Image", type: "image" },
          { name: "testimonial", title: "Testimonial", type: "text" },
          { name: "rating", title: "Rating", type: "number" },

        ],
      }],
      validation: (Rule) => Rule.required().min(1).max(3),
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
      subtitle: 'subtitle',
      media: 'image',
    },
  },
});

export default testimonialSchema;
