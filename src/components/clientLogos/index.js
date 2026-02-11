import React from 'react'
import { useTranslation } from 'react-i18next'
import * as styles from './style.module.css'

import useClientLogo from '../../hook/useClientLogo'
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"

const ClientLogos = () => {
  const clientLogo = useClientLogo();
  const { t } = useTranslation()

  return (
    <section className={styles.section5_wrap}>
      <div className={styles.container}>
        <div className="grid items-center">
          <div className="inline md:hidden px-6">
            <h2 className="flex text-2xl pt-12 ml-2 font-bold"><span><FaSquare /></span><b className='ml-3'>{t('clientLogos.title')}</b></h2>
          </div>
          <div className="hidden md:inline">
            <h2 className="flex justify-center items-center text-4xl underline decoration-yellow-400 my-14"><span><FaSquare /></span><b className='ml-3'>{t('clientLogos.title')}</b></h2>
          </div>
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 items-center">
              {clientLogo.map((item, index) => {
                const {
                  clientsAlt, clientsLogo } = item;
                return (
                  <div><img className='rounded-sm w-72 p-2 md:p-11' key={index} src={clientsLogo.url} alt={clientsAlt} loading="lazy" decoding="async" /></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
