import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'media',
  title: 'Media',
  type: 'document',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
