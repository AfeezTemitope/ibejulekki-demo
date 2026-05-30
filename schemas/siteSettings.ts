import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name:'siteName', title:'Site Name', type:'string', initialValue:'Ibeju-Lekki Local Government Area' }),
    defineField({ name:'tagline', title:'Tagline', type:'string', initialValue:'The Official Website of Ibeju-Lekki LGA' }),
    defineField({ name:'address', title:'Official Address', type:'text', rows:3 }),
    defineField({ name:'phone', title:'Main Phone Number', type:'string' }),
    defineField({ name:'email', title:'Official Email', type:'string' }),
    defineField({ name:'officeHours', title:'Office Hours', type:'string', initialValue:'Monday – Friday · 8:00am – 6:00pm' }),
    defineField({
      name:'socials', title:'Social Media', type:'object',
      fields:[
        defineField({ name:'twitter',   title:'X / Twitter URL', type:'url' }),
        defineField({ name:'facebook',  title:'Facebook URL',    type:'url' }),
        defineField({ name:'instagram', title:'Instagram URL',   type:'url' }),
        defineField({ name:'youtube',   title:'YouTube URL',     type:'url' }),
      ],
    }),
    defineField({
      name:'emergencyLines', title:'Emergency Lines', type:'array',
      of:[{
        type:'object',
        fields:[
          defineField({ name:'label', title:'Label', type:'string' }),
          defineField({ name:'number', title:'Number', type:'string' }),
        ],
        preview:{ select:{ title:'label', subtitle:'number' } },
      }],
    }),
  ],
  preview:{ select:{ title:'siteName' } },
})
