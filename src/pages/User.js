import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export const User = () => {
  
  const { removeAuth } = useContext(Context)
  return (
  <Fragment>
   <Layout title="Ya te vas? :c" subtitle="Volvé pronto ;)"></Layout> 
    <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
  </Fragment>
  )
}