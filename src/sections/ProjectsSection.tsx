import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com carrinho de compras, pagamentos integrados e painel administrativo.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://exemplo.com',
      featured: true
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Aplicação de gerenciamento de tarefas com drag-and-drop, notificações e colaboração em tempo real.',
      image: '📋',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://exemplo.com',
      featured: true
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'Dashboard interativo para visualização de dados meteorológicos com gráficos e mapas.',
      image: '🌤️',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'PWA'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://exemplo.com',
      featured: false
    },
    {
      id: '4',
      title: 'Social Media Analytics',
      description: 'Ferramenta de análise de redes sociais com relatórios detalhados e insights automatizados.',
      image: '📊',
      technologies: ['Next.js', 'Python', 'TensorFlow', 'Redis', 'AWS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://exemplo.com',
      featured: false
    },
    {
      id: '5',
      title: 'Mobile Banking App',
      description: 'Aplicativo móvel de banco digital com autenticação biométrica e transferências instantâneas.',
      image: '🏦',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Biometrics'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://exemplo.com',
      featured: true
    },
    {
      id: '6',
      title: 'AI Chatbot',
      description: 'Chatbot inteligente com processamento de linguagem natural e integração com múltiplas plataformas.',
      image: '🤖',
      technologies: ['Python', 'OpenAI API', 'FastAPI', 'WebSocket', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://exemplo.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Alguns dos projetos que desenvolvi para demonstrar minhas habilidades e experiência
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Projetos em Destaque
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl mb-2">{project.image}</div>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
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

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Outros Projetos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl mb-2">{project.image}</div>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
