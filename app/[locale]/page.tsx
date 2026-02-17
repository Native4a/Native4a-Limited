import { useTranslation } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { FaSquare } from 'react-icons/fa';
import AboutAs from '@/src/components/aboutAs';
import ContactForm from '@/src/components/contactAs';
import ClientLogos from '@/src/components/clientLogos';
import Awards from '@/src/components/awards';
import AwardsWeb from '@/src/components/awards/awards_website';
import SocialMediaBtn from '@/src/components/button/socialMedia';
import Icon from '@/src/components/baseTools/Icon';
import Clients from '@/src/components/Client\'s';
import ServiceScope from '@/src/components/serviceScope';
import Section from '@/src/components/baseTools/Section';
import styles from '@/src/styles/index.module.css';

const whatsApp_icon = '/img/whatsapp.svg';
const heroBanner_Award = '/img/Award02_2.png';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = useTranslation();

  return (
    <>
      <Section SectionClass={styles.bgCustomGradient}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-24 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
          <div className="px-6 xl:px-0 py-0 xl:py-6">
            <div className="pt-2 md:pt-3 2xl:pt-0">
              <h1 className={styles.title}>{t('hero.title')}</h1>
              <div>
                <h2 className={styles.subTitle}>{t('hero.subtitle')}</h2>
                <div className={styles.border}></div>
              </div>
              <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
                {t('hero.description')}
              </p>
              <div className="hidden md:grid grid-cols-1 gap-6 py-6">
                <div className="flex gap-6 w-full items-center">
                  <Icon Alt="Instagram link" />
                  <Icon
                    Alt="whatsapp link"
                    URL={whatsApp_icon}
                    linkto="https://api.whatsapp.com/send/?phone=85264602996&text=%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E5%BB%A3%E5%91%8A%E6%9C%8D%E5%8B%99"
                  >
                    whatsapp link
                  </Icon>
                </div>
              </div>
              <div className="md:hidden">
                <div className="flex gap-2 w-full items-center">
                  <SocialMediaBtn />
                </div>
              </div>
            </div>
            <AwardsWeb />
          </div>
          <div className="hidden md:grid content-center z-0">
            <img className="w-3/4" src={heroBanner_Award} alt="Award02" />
          </div>
          <Awards />
        </div>
      </Section>

      <Section
        SectionClass={`${styles.sec2_wrap} flex justify-evenly`}
        ContainerClass="flex flex-col items-center m-auto w-full"
      >
        <div className="grid grid-rows-0 relative container mx-auto">
          <h2 className="flex items-center text-2xl pt-12 ml-2 font-bold">
            <span>
              <FaSquare />
            </span>
            {t('homepage.serviceScope')}
          </h2>
          <h2 className="text-2xl md:text-4xl py-3 ml-0 md:ml-4 leading-0 md:leading-[3.5rem]">
            {t('homepage.popularMethods')}
          </h2>
          <p className="text-xl mx-4"></p>
        </div>
        <ServiceScope />
      </Section>

      <Section
        SectionClass={`${styles.sec3_wrap} flex justify-evenly`}
        ContainerClass="flex flex-col items-center m-auto"
      >
        <div className="grid items-center shadow-none rounded-3xl">
          <div className="inline md:hidden">
            <h2 className="flex items-center text-2xl ml-4 my-16">
              <span>
                <FaSquare />
              </span>
              {t('homepage.customerTestimonial')}
            </h2>
          </div>
          <div className="hidden md:inline text-center">
            <h2 className="text-4xl underline decoration-yellow-400 my-14">
              {t('homepage.customerTestimonial')}
            </h2>
          </div>
          <Clients />
        </div>
      </Section>

      <section>
        <AboutAs />
      </section>

      <ClientLogos />

      <section>
        <ContactForm />
      </section>
    </>
  );
}
