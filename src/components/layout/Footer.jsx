import React from 'react'
import { Wallet, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Support', href: '#support' },
    { name: 'Contact', href: '#contact' },
  ]

  const resourceLinks = [
    { name: 'FAQs', href: '#faqs' },
    { name: 'Help Center', href: '#help' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Community Guidelines', href: '#guidelines' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <motion.div 
                className="bg-gradient-to-r from-primary-600 to-primary-500 p-2 rounded-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Wallet className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold text-white">FundMate</span>
            </div>
            <p className="text-sm leading-relaxed">
              Making financial support simple, transparent, and accessible within trusted communities through peer-to-peer loans and crowdfunding.
            </p>
            <div className="flex space-x-4 pt-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} FundMate. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms
              </a>
              <a href="#privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
