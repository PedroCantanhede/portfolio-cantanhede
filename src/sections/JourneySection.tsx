import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';
import type { Experience } from '@/types';

const JourneySection = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      company: 'Empresa Tech',
      position: 'Desenvolvedor Full Stack Sênior',
      period: '2022 - Presente',
      description: 'Lidero o desenvolvimento de aplicações web e mobile, trabalhando com React, Node.js e tecnologias cloud.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
      type: 'work'
    },
    {
      id: '2',
      company: 'Startup Inovadora',
      position: 'Desenvolvedor Frontend',
      period: '2021 - 2022',
      description: 'Desenvolvi interfaces de usuário responsivas e interativas usando React e TypeScript.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
      type: 'work'
    },
    {
      id: '3',
      company: 'Universidade Federal',
      position: 'Bacharelado em Ciência da Computação',
      period: '2018 - 2022',
      description: 'Formação sólida em fundamentos da computação, algoritmos, estruturas de dados e engenharia de software.',
      technologies: ['C++', 'Java', 'Python', 'Algoritmos', 'Estruturas de Dados'],
      type: 'education'
    },
    {
      id: '4',
      company: 'Bootcamp Full Stack',
      position: 'Desenvolvimento Web Full Stack',
      period: '2020',
      description: 'Curso intensivo focado em tecnologias modernas de desenvolvimento web.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
      type: 'education'
    }
  ];

  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const educationExperiences = experiences.filter(exp => exp.type === 'education');

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Minha Jornada
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma linha do tempo da minha experiência profissional e educacional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <Briefcase className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">
                Experiência Profissional
              </h3>
            </div>
            
            <div className="space-y-6">
              {workExperiences.map((experience) => (
                <Card key={experience.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">
                      {experience.position}
                    </CardTitle>
                    <div className="text-primary font-medium">
                      {experience.company}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {experience.period}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">
                Educação
              </h3>
            </div>
            
            <div className="space-y-6">
              {educationExperiences.map((experience) => (
                <Card key={experience.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">
                      {experience.position}
                    </CardTitle>
                    <div className="text-primary font-medium">
                      {experience.company}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {experience.period}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
