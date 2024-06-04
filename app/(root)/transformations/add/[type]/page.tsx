import React from 'react'
import { transformationTypes } from '@/constants'


import Header from '@/components/shared/header'
import TransformationForm from '@/components/shared/TransformationForm'


const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {

  const transformation = transformationTypes[type]
  // console.log(transformation)

  return (
    <>
      <Header
        title={transformation.title}
        subTitle={transformation.subTitle}
      />
      <TransformationForm />
    </>
  )
}

export default AddTransformationTypePage