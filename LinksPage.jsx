import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Mail,
  Globe,
  Smartphone,
  Users,
  Briefcase,
  BookOpen,
  MessageCircle,
  MapPin,
  ArrowRight
} from 'lucide-react'

function LinksPage() {
  const navigate = useNavigate()

  // Main action links
  const mainLinks = [
    {
      title: '🌐 Visit Our Website',
      description: 'Explore WorkID features, how it works & more',
      onClick: () => navigate('/website'),
      icon: Globe,
      gradient: 'from-green-500 to-emerald-500',
      featured: true,
      internal: true
    },
    {
      title: '🚀 Launch WorkID App',
      description: 'Find work or hire workers instantly',
      url: 'https://workid-app.vercel.app',
      icon: Smartphone,
      gradient: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      title: '👨‍💼 For Workers',
      description: 'Create profile & find jobs with AI matching',
      url: 'https://workid-app.vercel.app/signup/worker',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: '🏢 For Employers',
      description: 'Post jobs & hire verified workers',
      url: 'https://workid-app.vercel.app/signup/employer',
      icon: Briefcase,
      gradient: 'from-amber-500 to-orange-500'
    }
  ]

  // Additional links
  const additionalLinks = [
    {
      title: '📚 Documentation',
      url: 'https://docs.workid.lk',
      icon: BookOpen
    },
    {
      title: '💬 Support Center',
      url: 'https://support.workid.lk',
      icon: MessageCircle
    },
    {
      title: '🌐 Full Website',
      onClick: () => navigate('/website'),
      icon: Globe,
      internal: true
    },
    {
      title: '📍 Find Us',
      url: 'https://maps.google.com',
      icon: MapPin
    }
  ]

  // Social media links
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/workid',
      icon: Facebook,
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/workid',
      icon: Instagram,
      color: '#E4405F'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/workid',
      icon: Twitter,
      color: '#1DA1F2'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/workid',
      icon: Linkedin,
      color: '#0A66C2'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@workid',
      icon: Youtube,
      color: '#FF0000'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/workid',
      icon: Github,
      color: '#333333'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-2xl relative z-10"
      >
        {/* Profile Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          {/* Logo/Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-3xl backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl">
              <span className="text-6xl font-bold text-white">W</span>
            </div>
            <div className="absolute inset-0 bg-white/20 rounded-3xl animate-ping"></div>
          </motion.div>

          {/* Name & Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-3"
          >
            WorkID
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/90 mb-2"
          >
            Empowering Sri Lanka's Workforce
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-white/80 max-w-md mx-auto"
          >
            Digital identity • AI job matching • Fair wages • Financial inclusion
          </motion.p>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-8 mt-6"
          >
            <div className="glass rounded-2xl px-6 py-3">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm text-white/80">Workers</div>
            </div>
            <div className="glass rounded-2xl px-6 py-3">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm text-white/80">Match Rate</div>
            </div>
            <div className="glass rounded-2xl px-6 py-3">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Links */}
        <div className="space-y-4 mb-8">
          {mainLinks.map((link, index) => (
            <motion.div
              key={link.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`block glass-strong rounded-2xl p-6 link-btn cursor-pointer ${
                link.featured ? 'border-2 border-white/50' : ''
              }`}
              onClick={link.internal ? link.onClick : undefined}
            >
              {link.internal ? (
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center flex-shrink-0`}>
                    <link.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-lg font-semibold text-white mb-1">
                      {link.title}
                    </div>
                    {link.description && (
                      <div className="text-sm text-white/80">
                        {link.description}
                      </div>
                    )}
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/80 flex-shrink-0" />
                </div>
              ) : (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center flex-shrink-0`}>
                    <link.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-lg font-semibold text-white mb-1">
                      {link.title}
                    </div>
                    {link.description && (
                      <div className="text-sm text-white/80">
                        {link.description}
                      </div>
                    )}
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/80 flex-shrink-0" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Links */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          {additionalLinks.map((link) => (
            <motion.div
              key={link.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass rounded-xl p-4 link-btn text-center cursor-pointer"
              onClick={link.internal ? link.onClick : undefined}
            >
              {link.internal ? (
                <div>
                  <link.icon className="w-6 h-6 text-white mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">
                    {link.title}
                  </div>
                </div>
              ) : (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-6 h-6 text-white mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">
                    {link.title}
                  </div>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-4">
            <span className="text-white/80 text-sm font-medium">Connect With Us</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 glass rounded-xl flex items-center justify-center social-icon"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Email */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-8"
        >
          <a
            href="mailto:hello@workid.lk"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">hello@workid.lk</span>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-8 text-white/60 text-sm"
        >
          <p>© 2024 WorkID. Made with ❤️ for Sri Lanka 🇱🇰</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LinksPage
