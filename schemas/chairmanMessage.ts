import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'chairmanMessage',
  title: "Chairman's Message",
  type: 'document',
  fields: [
    defineField({ name:'name', title:'Full Name', type:'string', initialValue:'Hon. Abdullahi Sesan Olowa', validation:(R)=>R.required() }),
    defineField({ name:'title', title:'Official Title', type:'string', initialValue:'Executive Chairman, Ibeju-Lekki Local Government', validation:(R)=>R.required() }),
    defineField({
      name:'photo', title:'Official Photo', type:'image', options:{ hotspot:true },
      fields:[ defineField({ name:'alt', type:'string', title:'Alt Text' }) ],
    }),
    defineField({ name:'pullQuote', title:'Pull Quote', type:'text', rows:3, description:'Short quote used in hero and section header', validation:(R)=>R.required().max(220) }),
    defineField({ name:'fullMessage', title:'Full Message', type:'array', of:[{ type:'block' }] }),
    defineField({
      name:'stats', title:'Key Achievements', type:'array',
      of:[{
        type:'object',
        fields:[
          defineField({ name:'value', title:'Value', type:'string' }),
          defineField({ name:'label', title:'Label', type:'string' }),
          defineField({ name:'detail', title:'Detail', type:'string' }),
        ],
        preview:{ select:{ title:'label', subtitle:'value' } },
      }],
      validation:(R)=>R.max(4),
    }),
  ],
  preview:{ select:{ title:'name', subtitle:'title', media:'photo' } },
})
