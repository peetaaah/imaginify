import React from 'react'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import { transformationTypes } from '@/constants'
import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm'
import { getUserById } from '@/lib/actions/user.actions'


const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {


  const { userId } = auth()
  const transformation = transformationTypes[type]


  if (!userId) redirect('/sign-in')

  const user = await getUserById(userId)
  // console.log(transformation)

  return (
    <>
      <Header
        title={transformation.title}
        subTitle={transformation.subTitle}
      />
      <TransformationForm
        action='Add'
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  )
}

export default AddTransformationTypePage