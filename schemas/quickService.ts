import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'quickService',
  title: 'Quick Services',
  type: 'document',
  fields: [
    defineField({ name:'label', title:'Service Name', type:'string', validation:(R)=>R.required().max(40) }),
    defineField({ name:'description', title:'Short Description', type:'string', description:'Max 8 words shown under icon', validation:(R)=>R.required().max(50) }),
    defineField({ name:'icon', title:'Icon Name (Lucide)', type:'string', description:'e.g. CreditCard, Briefcase, Trash2', validation:(R)=>R.required() }),
    defineField({ name:'href', title:'Destination URL', type:'url', validation:(R)=>R.uri({ allowRelative:true }).required() }),
    defineField({ name:'external', title:'Opens in new tab', type:'boolean', initialValue:false }),
    defineField({ name:'order', title:'Display Order', type:'number', validation:(R)=>R.required().integer().positive() }),
    defineField({ name:'active', title:'Active', type:'boolean', initialValue:true }),
  ],
  orderings:[{ title:'Display Order', name:'orderAsc', by:[{ field:'order', direction:'asc' }] }],
  preview:{ select:{ title:'label', subtitle:'description' } },
})
