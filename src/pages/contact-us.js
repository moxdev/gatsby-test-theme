import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../layouts/index'
import ContactForm from '../components/ContactForm'

const ContactPage = ({ data, location }) => (
  <Layout location={location}>
    <div>
      <h1>Contact Page</h1>
      <ContactForm />
    </div>
  </Layout>
)

export default ContactPage
