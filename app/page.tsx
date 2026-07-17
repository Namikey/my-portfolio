'use client';

import { personalInfo, skills, projects, careerTimeline } from '../portfolio-data';
import { Briefcase, Cpu, Mail, FolderGit, Award, CheckCircle, Calendar, User, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

// アニメーション設定
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden">
      {/* ヒーローセクション */}
      <header className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>

        <motion.div 
          className="max-w-5xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span 
            variants={fadeInUp}
            className="bg-indigo-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-block"
          >
            Portfolio
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold mt-4 tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-indigo-200 font-medium mt-2"
          >
            {personalInfo.title}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="h-1 w-20 bg-indigo-500 my-6"></motion.div>
          
          {/* キャッチフレーズ（旧 tagline から catchphrase に変更） */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-2xl text-indigo-300 max-w-3xl leading-relaxed font-bold italic"
          >
            「{personalInfo.catchphrase}」
          </motion.p>
          
          {/* 自己紹介文（旧 about から summary に変更、改行が反映されるように調整） */}
          <motion.p 
            variants={fadeInUp}
            className="text-slate-300 mt-6 max-w-3xl leading-relaxed text-sm md:text-base whitespace-pre-line"
          >
            {personalInfo.summary}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex gap-4 mt-8">
            {personalInfo.social?.github && (
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-lg transition font-medium text-sm shadow-md"
              >
                <FolderGit className="w-4 h-4" /> GitHub
              </motion.a>
            )}
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-lg transition font-medium text-sm shadow-md"
            >
              <Mail className="w-4 h-4" /> お問い合わせ
            </motion.a>
          </motion.div>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-24">
        
        {/* 新設：強み・コアバリュー（coreValues）カードセクション */}
        {personalInfo.coreValues && (
          <section id="core-values" className="space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
              <Zap className="text-indigo-600 w-6 h-6 animate-pulse" />
              <h2 className="text-2xl font-bold text-slate-900">核心となる3つの強み</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {personalInfo.coreValues.map((value, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
                >
                  <span className="inline-flex items-center justify-center p-2 bg-indigo-50 rounded-lg text-indigo-600 font-bold text-sm mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* プロフィール・略歴（職歴）セクション */}
        <section id="profile" className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <User className="text-indigo-600 w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-900">プロフィール & 略歴</h2>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="relative border-l border-slate-200 ml-4 md:ml-32 py-2 space-y-8">
              {careerTimeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-6 md:pl-8"
                >
                  {/* 点（ドット） */}
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-600 ring-4 ring-white"></span>
                  
                  {/* 左側の西暦（PCサイズのみ） */}
                  <div className="hidden md:block absolute -left-32 top-1 w-24 text-right">
                    <span className="text-sm font-bold text-slate-500 font-mono">{item.year}</span>
                  </div>

                  {/* 経歴の中身 */}
                  <div className="space-y-1">
                    {/* スマホサイズ用の西暦表示 */}
                    <span className="md:hidden block text-xs font-bold text-indigo-600 font-mono mb-1">{item.year}</span>
                    <h3 className="text-base font-bold text-slate-800">{item.event}</h3>
                    {item.description && (
                      <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-line">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* スキルセクション */}
        <section id="skills" className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Cpu className="text-indigo-600 w-6 h-6 animate-pulse" />
            <h2 className="text-2xl font-bold text-slate-900">技術スタック & 領域</h2>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {skills.map((cat, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-4 transition-shadow hover:shadow-md"
              >
                <h3 className="font-bold text-slate-900 text-lg border-l-4 border-indigo-600 pl-3">
                  {cat.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <div className="flex gap-1 mt-1.5">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: sIdx * 0.05 + i * 0.05 }}
                            className={`h-1.5 w-full rounded-full origin-left ${
                              i < skill.level ? 'bg-indigo-600' : 'bg-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 主要プロジェクト実績セクション */}
        <section id="projects" className="space-y-12">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Briefcase className="text-indigo-600 w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-900">主要開発実績 (Featured Projects)</h2>
          </div>
          
          <div className="relative border-l-2 border-indigo-100 ml-4 md:ml-32 py-4 space-y-16">
            {projects.map((proj, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-10"
              >
                <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 border-4 border-indigo-600 z-10">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                </span>

                <div className="hidden md:block absolute -left-32 top-1 w-24 text-right">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                    {proj.period.split('（')[0]}
                  </span>
                </div>

                <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition">
                  <div className="bg-slate-900 text-white p-6 md:p-8">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <span className="md:hidden inline-flex items-center gap-1 text-indigo-400 text-xs font-semibold tracking-wider mb-2">
                          <Calendar className="w-3.5 h-3.5" /> {proj.period}
                        </span>
                        <span className="hidden md:inline-block text-indigo-400 text-xs font-semibold tracking-wider">
                          {proj.period}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold mt-1">
                          {proj.title}
                        </h3>
                      </div>
                      <span className="bg-indigo-600/80 text-white text-xs font-semibold px-3 py-1.5 rounded-md border border-indigo-500 whitespace-nowrap">
                        {proj.role}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs mt-3 font-mono">
                      チーム構成: {proj.team}
                    </p>
                  </div>

                  <div className="p-6 md:p-8 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-slate-950 flex items-center gap-2 text-sm uppercase tracking-wider text-slate-450">
                        <span>Background / Challenge</span>
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {proj.background}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-950 flex items-center gap-2 text-sm uppercase tracking-wider text-slate-450">
                        <span>PM / SE Initiatives</span>
                      </h4>
                      <ul className="space-y-3">
                        {proj.highlights.map((highlight, hIdx) => {
                          const splitIndex = highlight.indexOf(': ');
                          const title = splitIndex !== -1 ? highlight.substring(0, splitIndex) : '';
                          const desc = splitIndex !== -1 ? highlight.substring(splitIndex + 2) : highlight;
                          return (
                            <li key={hIdx} className="flex items-start gap-2.5 text-sm md:text-base">
                              <span className="text-indigo-600 font-bold mt-1 flex-shrink-0">✓</span>
                              <div className="text-slate-600 leading-relaxed">
                                {title ? <strong className="text-slate-800">{title}: </strong> : null}
                                {desc}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 space-y-3">
                      <h4 className="font-bold text-emerald-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Award className="w-4 h-4 text-emerald-600" />
                        <span>Outcomes & Results</span>
                      </h4>
                      <ul className="space-y-2">
                        {proj.outcomes.map((outcome, oIdx) => (
                          <li key={oIdx} className="flex items-start gap-2 text-slate-700 text-sm md:text-base">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-slate-900 text-slate-400 text-center py-8 border-t border-slate-800 text-sm">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="mt-1 text-slate-600">Built with Next.js, Tailwind CSS & Framer Motion</p>
      </footer>
    </div>
  );
}