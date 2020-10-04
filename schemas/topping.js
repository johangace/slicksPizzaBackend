import React from 'react';
import { FaPepperHot  } from 'react-icons/fa'

export default {
  //computer name
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  icon: () => <FaPepperHot/>,

  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'Name of topping',
    },

    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Name of topping',
      options: {
      layout: 'checkbox'}
    },
  ],


  preview: {

    select: {name:'name', vegetarian:'vegetarian'},

    prepare: fields => ({
      title: `${fields.name} ${fields.vegetarian? '🌱' : "" }`
    })
  }
}
