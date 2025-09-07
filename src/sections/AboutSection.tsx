import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Smartphone, Database } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    },
    {
      category: 'Backend',
      icon: Database,
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express'],
    },
    {
      category: 'Design',
      icon: Palette,
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'],
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor apaixonado por tecnologia e inovação, sempre buscando 
            aprender e aplicar as melhores práticas do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Minha História
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Comecei minha jornada na programação há mais de 5 anos, sempre fascinado 
              pela capacidade de transformar ideias em realidade através do código. 
              Ao longo dos anos, desenvolvi expertise em diversas tecnologias e 
              frameworks modernos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acredito que a tecnologia deve ser acessível e útil para todos. 
              Por isso, sempre busco criar soluções que não apenas funcionem bem, 
              mas que também proporcionem uma excelente experiência ao usuário.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Tecnologias</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <Card key={skill.category} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Icon className="h-8 w-8 text-primary mr-3" />
                      <h4 className="text-lg font-semibold text-foreground">
                        {skill.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
