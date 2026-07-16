import React from 'react';
import { Mail, Phone, MapPin, Square } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * ContactSection Component
 * Recreates a "Contact Us" section with contact details and navigation links.
 */

interface ContactItemProps {
  icon: React.ReactNode;
  content: string;
  title?: string;
}
const ContactItem = ({
  icon,
  content,
  title
}: ContactItemProps) => <li className="mb-4 flex items-start w-full pl-3 rounded-lg group">
    <div className="mt-1 flex-shrink-0 text-slate-600 transition-colors group-hover:text-blue-600">
      {icon}
    </div>
    <div className="ml-3">
      <p className="text-base md:text-xl font-medium text-slate-800 leading-tight" title={title}>
        <span>{content}</span>
      </p>
    </div>
  </li>;
interface NavLink {
  label: string;
  href: string;
}
const NAVIGATION_LINKS: NavLink[] = [{
  label: '關於NATIVE4A',
  href: '#'
}, {
  label: '獨家繁中BACKLINK',
  href: '#'
}, {
  label: '網站設計及開發',
  href: '#'
}, {
  label: 'SEO',
  href: '#'
}, {
  label: '社交媒體廣告',
  href: '#'
}];
const CONTACT_INFO = [{
  icon: <Mail className="w-6 h-6" />,
  content: 'native4a.inquiry@gmail.com',
  title: 'email'
}, {
  icon: <Phone className="w-6 h-6" />,
  content: '+852 6746 1301',
  title: 'phone'
}, {
  icon: <MapPin className="w-6 h-6" />,
  content: '新界葵涌葵昌路26-38號 豪華工業大廈22樓',
  title: '香港地址'
}, {
  icon: <MapPin className="w-6 h-6" />,
  content: '深圳市福田區泰然七路蒼松大廈19樓',
  title: '深圳地址'
}];
export const ContactSection: React.FC = () => {
  return <section id="contactAs" className="w-full bg-[#F7F7F8] py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="pt-8 lg:pt-12">
            <h2 className="flex items-center text-3xl md:text-4xl font-bold mb-10 ml-2 text-gray-900">
              <span className="mr-4 text-gray-800">
                <Square className="w-8 h-8 fill-current" />
              </span>
              <strong className="font-black">聯絡我們</strong>
            </h2>
            
            <div className="mt-8 ml-0 md:ml-12">
              <ul className="w-full space-y-6">
                {CONTACT_INFO.map((item, index) => <ContactItem key={`contact-item-${index}`} icon={item.icon} content={item.content} title={item.title} />)}
              </ul>
            </div>
          </div>

          {/* Right Column: Navigation Links */}
          <div className="lg:pt-12">
            <div className="m-5 md:m-12 text-lg leading-relaxed text-slate-700">
              <ul className="space-y-6 list-disc pl-6 marker:text-slate-400">
                {NAVIGATION_LINKS.map((link, index) => <li key={`nav-link-${index}`} className="transition-all hover:translate-x-1">
                    <a href={link.href} className={cn("text-slate-700 hover:text-blue-600 transition-colors", "underline underline-offset-[10px] decoration-1 decoration-slate-300 hover:decoration-blue-600")}>
                      <span>{link.label}</span>
                    </a>
                  </li>)}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>;
};