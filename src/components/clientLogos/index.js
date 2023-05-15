import React from 'react'
import * as styles from './style.module.css'

import useClientLogo from '../../hook/useClientLogo'
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"

const ClientLogos = () => {
  const clientLogo = useClientLogo();
  return (
    <div>
      {clientLogo.map((item, index) => {
        const {
          clientsLogo } = item;
        return (
          <section className={styles.section5_wrap} key={index}>
            <div className={styles.container}>
              <div className="grid items-center">
                <div className="inline md:hidden px-6">
                  <h2 className="flex text-2xl pt-12 ml-2 font-bold"><span><FaSquare/></span><b className='ml-3'>更多合作客戶</b></h2>
                </div>
                <div className="hidden md:inline">
                  <h2 className="flex justify-center items-center text-4xl underline decoration-yellow-400 my-14"><span><FaSquare/></span><b className='ml-3'>更多合作客戶</b></h2>
                </div>
                <div class="container mx-auto p-6">
                  <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 items-center">
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[1].url} alt="鉑康 Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[7].url} alt="搬屋易 Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[2].url} alt="Taste In Design Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[13].url} alt="卓遠Accolade Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[4].url} alt="LOST Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[6].url} alt="JACO Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[0].url} alt="雅居蚊網 Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[9].url} alt="惟健康 Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[3].url} alt="煤氣達人 Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[11].url} alt="Bay247 Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[15].url} alt="EMMAS Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[8].url} alt="老佛爺 Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[5].url} alt="NORA Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[14].url} alt="alessandro Logo"/></div>
                    <div><img className='rounded-sm w-72 p-2 md:p-11' src={clientsLogo[12].url} alt="Annetso Shopp Logo"/></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ClientLogos;