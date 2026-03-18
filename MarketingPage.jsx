import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Shield,
  Smartphone,
  Target,
  Wallet,
  MessageCircle,
  Award,
  BookOpen,
  Globe,
  UserPlus,
  Search,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone
} from 'lucide-react'

function MarketingPage() {
  const navigate = useNavigate()

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 left-4 z-50"
      >
        <motion.button
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
        >
          <ArrowLeft className="w-4 h-4 text-gray-700" />
          <span className="text-sm font-semibold text-gray-700">Back to Links</span>
        </motion.button>
      </motion.div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-20">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          ></motion.div>
          <motion.div 
            animate={{ 
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          ></motion.div>
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-xl mb-6 border border-purple-100"
              >
                <Sparkles className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Empowering 60% of Sri Lanka's Workforce
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
              >
                Your Digital
                <motion.span 
                  className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Identity.
                </motion.span>
                Your Future.
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                WorkID connects informal workers with fair job opportunities through <span className="font-semibold text-blue-600">AI-powered matching</span>, <span className="font-semibold text-purple-600">digital wallets</span>, and <span className="font-semibold text-pink-600">verified credentials</span>. Join thousands building a better future.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <motion.a
                  href="https://workid-app.vercel.app/signup/worker"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all"
                >
                  Find Work Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="https://workid-app.vercel.app/signup/employer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold rounded-full border-2 border-blue-500 hover:bg-blue-50 hover:border-blue-600 transition-all shadow-lg"
                >
                  Hire Workers
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
              >
                {[
                  { icon: Users, value: '10K+', label: 'Workers', color: 'blue' },
                  { icon: TrendingUp, value: '95%', label: 'Success', color: 'green' },
                  { icon: Shield, value: '100%', label: 'Verified', color: 'purple' }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 rounded-2xl mb-2 shadow-lg`}>
                      <stat.icon className={`w-7 h-7 text-${stat.color}-600`} />
                    </div>
                    <div className="text-3xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: Animated Phone Mockup - THE BEST PART! */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Main Phone Card */}
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 max-w-sm mx-auto border border-white/20"
                  style={{ 
                    boxShadow: '0 30px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1) inset'
                  }}
                >
                  {/* Profile Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-full shadow-lg ring-4 ring-blue-100"
                      ></motion.div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">Nimal Perera</div>
                        <div className="text-sm text-gray-500 font-medium">Skilled Electrician ⚡</div>
                      </div>
                    </div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1, type: "spring", stiffness: 200 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Verified
                    </motion.div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 rounded-2xl p-5 shadow-lg border border-blue-200"
                    >
                      <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">24</div>
                      <div className="text-xs font-bold text-blue-700 mt-1">Jobs Completed</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      className="bg-gradient-to-br from-purple-50 via-purple-100 to-pink-100 rounded-2xl p-5 shadow-lg border border-purple-200"
                    >
                      <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">4.9</div>
                      <div className="text-xs font-bold text-purple-700 mt-1">⭐ Rating</div>
                    </motion.div>
                  </div>

                  {/* AI Match Card */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden"
                  >
                    {/* Animated background */}
                    <motion.div
                      animate={{ 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{ duration: 10, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50"
                      style={{ backgroundSize: '200% 200%' }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold opacity-90">🎯 Next Job Match</span>
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.5, type: "spring" }}
                          className="text-3xl font-black"
                        >
                          92%
                        </motion.span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-white/30 rounded-full h-3 mb-4 overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '92%' }}
                          transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-white to-yellow-300 rounded-full shadow-lg relative"
                        >
                          <motion.div
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          />
                        </motion.div>
                      </div>
                      
                      <div className="text-sm font-medium opacity-95 flex items-center gap-2">
                        <span>⚡</span>
                        <span>Electrical work in Colombo • Rs. 5,000</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Notification 1 - Job Accepted */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 z-20 border-2 border-green-200"
                  style={{ animation: 'float 5s ease-in-out infinite' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-gray-900">Job Accepted!</div>
                      <div className="text-xs text-gray-500 font-medium">2 mins ago</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Notification 2 - Payment */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: -100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 z-20 border-2 border-blue-200"
                  style={{ animation: 'float 6s ease-in-out infinite 1s' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <Wallet className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-sm font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">+Rs. 8,500</div>
                      <div className="text-xs text-gray-500 font-medium">Payment received 💰</div>
                    </div>
                  </div>
                </motion.div>

                {/* Glow Effect Behind Phone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
          >
            <motion.div 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-gray-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6 border border-blue-200 shadow-lg"
            >
              <span className="text-sm font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🚀 POWERFUL FEATURES
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6"
            >
              Everything You Need to
              <motion.span 
                className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Succeed
              </motion.span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              WorkID combines <span className="font-bold text-blue-600">cutting-edge AI</span> with <span className="font-bold text-purple-600">human-centered design</span> for informal workers
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Smartphone, title: 'Digital Identity', desc: 'Secure verified digital profiles with OTP authentication', color: 'from-blue-500 to-cyan-500', emoji: '📱' },
              { icon: Target, title: 'AI Job Matching', desc: '92% accuracy using hybrid recommendation algorithms', color: 'from-purple-500 to-pink-500', emoji: '🎯' },
              { icon: Wallet, title: 'Digital Wallet', desc: 'Secure payments, instant transfers & auto-savings', color: 'from-amber-500 to-orange-500', emoji: '💰' },
              { icon: Shield, title: 'Fair Wages', desc: 'AI-powered wage prediction ensures fair compensation', color: 'from-green-500 to-emerald-500', emoji: '🛡️' },
              { icon: TrendingUp, title: 'Reputation Score', desc: 'Build credibility with verified reviews & ratings', color: 'from-red-500 to-rose-500', emoji: '📈' },
              { icon: MessageCircle, title: 'Real-time Chat', desc: 'Connect directly with employers or workers instantly', color: 'from-indigo-500 to-purple-500', emoji: '💬' },
              { icon: Globe, title: 'Multilingual', desc: 'Available in English, Sinhala & Tamil languages', color: 'from-teal-500 to-cyan-500', emoji: '🌍' },
              { icon: BookOpen, title: 'Free Courses', desc: 'Enhance skills with free certifications & training', color: 'from-violet-500 to-purple-500', emoji: '📚' },
              { icon: Award, title: 'Achievement Badges', desc: 'Showcase expertise to attract better opportunities', color: 'from-pink-500 to-rose-500', emoji: '🏆' }
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Emoji decoration */}
                <div className="absolute -top-2 -right-2 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {f.emoji}
                </div>

                {/* Icon */}
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br ${f.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all`}
                >
                  <f.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-black text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 transition-all">
                  {f.title}
                </h3>
                <p className="relative z-10 text-gray-600 leading-relaxed font-medium">
                  {f.desc}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${f.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-lg cursor-pointer"
            >
              Scroll to see how it works
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
              <span className="text-purple-700 font-semibold text-sm">⚡ PROCESS</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900">
              How <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WorkID</span> Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: UserPlus, title: 'Create Profile', desc: 'Sign up in 2 minutes', color: 'from-blue-500 to-cyan-500', step: '01' },
              { icon: Search, title: 'Get Matches', desc: 'AI recommendations', color: 'from-purple-500 to-pink-500', step: '02' },
              { icon: CheckCircle, title: 'Apply & Hired', desc: 'One-click apply', color: 'from-amber-500 to-orange-500', step: '03' },
              { icon: TrendingUp, title: 'Earn & Grow', desc: 'Secure payments', color: 'from-green-500 to-emerald-500', step: '04' }
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative">
                <div className="absolute top-4 right-4 text-8xl font-bold text-gray-50">{s.step}</div>
                <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <s.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://workid-app.vercel.app/signup"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <span className="text-2xl font-bold">WorkID</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering Sri Lanka's workforce
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <a href="mailto:hello@workid.lk" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">hello@workid.lk</span>
                </a>
                <a href="tel:+94112345678" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+94 11 234 5678</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 WorkID. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Made with ❤️ for Sri Lanka 🇱🇰</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MarketingPage
