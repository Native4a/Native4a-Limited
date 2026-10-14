import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Section from '../components/baseTools/Section'

const TermsOfBusiness = ({ location, pageContext }) => {
  const { t } = useTranslation()

  return (
    <Layout location={location} pageContext={pageContext}>
      <Seo title={t('termsPage.title')} description={t('termsPage.description')} />
      <Section ContainerClass="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <h1 className="text-4xl font-black">{t('termsPage.title')}</h1>
        <p className="mt-6 text-lg leading-relaxed">{t('termsPage.body')}</p>
        <p className="mt-6 text-lg leading-relaxed">
          <a className="underline underline-offset-2" href="https://wa.me/85264602996">
            WhatsApp 6460 2996
          </a>
          {' · '}
          <a className="underline underline-offset-2" href="mailto:native4a.inquiry@gmail.com">
            native4a.inquiry@gmail.com
          </a>
        </p>
      </Section>
    </Layout>
  )
}

export default TermsOfBusiness
