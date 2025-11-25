import React from 'react'
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      value: '$2.5M+',
      label: 'Total Funded',
      color: 'primary'
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: '10,000+',
      label: 'Active Users',
      color: 'secondary'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: '95%',
      label: 'Success Rate',
      color: 'primary'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: '24/7',
      label: 'Support Available',
      color: 'secondary'
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.color}-100 text-${stat.color}-600 mb-4 group-hover:scale-110 transition-transform duration-200`}>
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
