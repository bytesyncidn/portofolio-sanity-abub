import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'logo',
  title: 'Logo',
  type: 'document',
  options:{
    hotspot:true,
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'logoImage',
      title: 'Logo image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview:{
    select:{
      title: 'title',
      media: 'logoImage',
    },
  },
});