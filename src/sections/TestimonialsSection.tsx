import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Maria Silva',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Excelente desenvolvedor! Entregou o projeto no prazo e com qualidade excepcional. Muito profissional e sempre disponível para esclarecer dúvidas.',
      avatar: '👩‍💼'
    },
    {
      id: '2',
      name: 'João Santos',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'Trabalho incrível! Transformou nossa ideia em uma aplicação robusta e escalável. Recomendo fortemente para qualquer projeto.',
      avatar: '👨‍💼'
    },
    {
      id: '3',
      name: 'Ana Costa',
      role: 'Designer UX/UI',
      company: 'DesignStudio',
      content: 'Colaboração perfeita! Entendeu perfeitamente os requisitos de design e implementou com precisão. Muito atencioso aos detalhes.',
      avatar: '👩‍🎨'
    },
    {
      id: '4',
      name: 'Carlos Oliveira',
      role: 'Tech Lead',
      company: 'DevCompany',
      content: 'Desenvolvedor excepcional! Código limpo, bem documentado e sempre seguindo as melhores práticas. Um verdadeiro profissional.',
      avatar: '👨‍💻'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Depoimentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O que clientes e colegas dizem sobre meu trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-muted-foreground mb-4 relative">
                      <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                      <p className="pl-4 italic">
                        "{testimonial.content}"
                      </p>
                    </blockquote>
                    
                    <div className="border-t border-border pt-4">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-muted-foreground">Satisfação dos Clientes</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">50+</div>
            <div className="text-muted-foreground">Projetos Entregues</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">3+</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
