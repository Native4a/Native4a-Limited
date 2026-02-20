// Replaced Gatsby useStaticQuery with static fallback data
// TODO: Connect to Contentful API when environment variables are available

const useFooter = () => {
  return [
    {
      title: 'Native4a',
      description: {
        description: 'Digital Marketing Agency',
      },
      buttonName: 'WhatsApp查詢',
      native4aLogo: {
        url: '/images/native4a-logo.png',
      },
      copyRight: {
        raw: '',
      },
      googlePartnerImage: {
        url: '/images/google-partner.png',
      },
    },
  ]
}
export default useFooter
