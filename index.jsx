import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User } from 'lucide-react';

export default function Portfolio() {
  // Данные о проектах (легко редактировать)
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Высоконагруженное приложение на Next.js и Node.js с интеграцией Stripe и PostgreSQL.",
      tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
      link: "https://github.com"
    },
    {
      title: "AI Chat Assistant",
      description: "Интерфейс для взаимодействия с LLM моделями через API с поддержкой контекста и стриминга ответов.",
      tags: ["React", "Next.js", "OpenAI API", "Zustand"],
      link: "https://github.com"
    }
  ];

  // Данные об опыте работы
  const experience = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2024 - Настоящее время",
      description: "Разработка архитектуры крупных веб-приложений, оптимизация Core Web Vitals на 40%."
    },
    {
      role: "Fullstack Developer",
      company: "Digital Agency",
      period: "2022 - 2024",
      description: "Создание и поддержка клиентских сервисов. Интеграция сторонних API и баз данных."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-900">
      
      {/* Навигационная панель */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-lg font-bold text-teal-400">&lt;DevPortfolio /&gt;</span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">О себе</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Проекты</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Опыт</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-32">
        
        {/* Главный экран (Hero) */}
        <section id="about" className="space-y-6 pt-8">
          <div className="space-y-2">
            <p className="text-teal-400 font-mono text-sm tracking-wider">Привет, меня зовут</p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
              Иван Иванов.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-400">
              Я создаю масштабируемые веб-приложения.
            </h2>
          </div>
          
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
            Fullstack-разработчик со специализацией на экосистеме **React / Next.js**. 
            Пишу чистый, поддерживаемый код и превращаю сложные задачи в простые цифровые решения.
          </p>

          {/* Соцсети */}
          <div className="flex items-center gap-4 pt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-teal-400 hover:bg-slate-900 rounded-lg transition-all" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-teal-400 hover:bg-slate-900 rounded-lg transition-all" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com" className="p-2 text-slate-400 hover:text-teal-400 hover:bg-slate-900 rounded-lg transition-all" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Секция: Проекты */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
            <Code className="text-teal-400 w-6 h-6" />
            <h3 className="text-2xl font-bold">Избранные проекты</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group relative p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-bold text-slate-200 group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h4>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-300 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-teal-400/90">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Секция: Опыт работы */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
            <Briefcase className="text-teal-400 w-6 h-6" />
            <h3 className="text-2xl font-bold">Опыт работы</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-slate-800">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-10 group">
                {/* Маркер на таймлайне */}
                <div className="absolute left-[11px] top-1.5 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950 group-hover:bg-teal-400 group-hover:border-teal-900 transition-all" />
                
                <div className="space-y-1">
                  <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                  <h4 className="text-xl font-bold text-slate-200">{exp.role}</h4>
                  <p className="text-sm font-medium text-teal-400/80">{exp.company}</p>
                  <p className="text-slate-400 text-sm pt-2 max-w-2xl leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Подвал */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs font-mono text-slate-600">
        <p>© {new Date().getFullYear()} — Разработано на Next.js & Tailwind</p>
      </footer>
    </div>
  );
}
