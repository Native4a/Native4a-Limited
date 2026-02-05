import React from 'react'
import { Link } from 'gatsby'
import useSocialMedia from '../../../hook/useSocialMedia'

interface SocialMediaBtnProps {
  showPartialItems?: boolean
}

const SocialMediaBtn: React.FC<SocialMediaBtnProps> = ({
  showPartialItems,
}) => {
  const socialM = useSocialMedia()

  return (
    <div className="contents">
      <ul className="rounded-3xl bg-white pt-16 pb-5 contents">
        {socialM.map((item: any, index: number) => {
          const {
            socialMediaLogo,
            url,
            title,
            backgroundColor,
            description,
          } = item
          if (showPartialItems && ![0].includes(index)) {
            return null
          }

          return (
            <li
              role="navigation"
              aria-label="Main"
              key={index}
              className="rounded-full pl-3 pr-6"
              style={
                backgroundColor && backgroundColor.value
                  ? { backgroundColor: backgroundColor.value }
                  : {}
              }
            >
              <Link
                to={url}
                className="flex items-center text-white font-medium text-lg"
              >
                <img
                  src={socialMediaLogo.url}
                  alt={`${title} button`}
                  className="w-10"
                  width="500"
                  height="600"
                />
                <span>{description}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SocialMediaBtn
