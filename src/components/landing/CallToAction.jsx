import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const CallToAction = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-600 relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      ></motion.div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          {/* <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8"
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="h-10 w-10 text-white" />
          </motion.div> */}

          {/* Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to Transform Your Financial Journey?
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Join thousands of users who trust FundMate for their lending and crowdfunding needs. 
            Start your journey today with complete transparency and security.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button 
              className="bg-white hover:bg-gray-100 text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-xl flex items-center space-x-2 group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Create Free Account</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </motion.button>
            <motion.button 
              className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-12 flex flex-wrap gap-8 justify-center items-center text-white/80 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {['No setup fees', 'Cancel anytime', '24/7 support'].map((text, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.1 }}
              >
                <motion.span 
                  className="text-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  ✓
                </motion.span>
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
