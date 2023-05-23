import { graphql, useStaticQuery } from 'gatsby';

const useAwards = () => {
    const {
      allContentfulAwards: { nodes }
      } = useStaticQuery(graphql`
      query AwardsQuery{
        allContentfulAwards {
          nodes {
            title {
              title
            }
            subTitle_field01
            awardImage_field01 {
              title
              url
            }
            subTitle_field02
            awardImage_field02 {
              title
              url
            }
            title_field {
              raw
            }
          }
        }
      }
    `);
    return nodes;
};

export default useAwards