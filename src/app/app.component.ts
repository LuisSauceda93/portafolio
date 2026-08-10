import { Component } from '@angular/core';

type NavItem = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
};

type Metric = {
  value: string;
  label: string;
};

type TechItem = {
  name: string;
  icon?: string;
  iconAlt?: string;
  badge?: string;
  tone: string;
  wide?: boolean;
  lightSurface?: boolean;
  wordmark?: boolean;
};

type TechGroup = {
  title: string;
  items: TechItem[];
};

type LearningItem = {
  name: string;
  description: string;
  icon?: string;
  badge?: string;
  tone: string;
};

type Project = {
  title: string;
  role: string;
  summary: string;
  impact: string;
  stack: string[];
  category: string;
  accent: string;
};

type CareerItem = {
  period: string;
  title: string;
  company: string;
  description: string;
  points: string[];
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Luis Sauceda';
  isMobileMenuOpen = false;

  readonly navItems: NavItem[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#contacto' }
  ];

  readonly socialLinks: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/LuisSauceda93' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luissauceda' },
    { label: 'Correo', href: 'mailto:luigalberto9380@gmail.com' }
  ];

  readonly metrics: Metric[] = [
    { value: '8+', label: 'años de experiencia' },
    { value: '20+', label: 'proyectos entregados' },
    { value: 'Full-stack', label: 'web, mobile y backend' },
    { value: 'ERP + APIs', label: 'integraciones y automatización' }
  ];

  readonly techGroups: TechGroup[] = [
    {
      title: 'Frontend',
      items: [
        { name: 'Angular', icon: 'images/stack-icons/angular.svg', iconAlt: 'Angular', tone: '#dd0031' },
        { name: 'Ionic', icon: 'images/stack-icons/ionic.svg', iconAlt: 'Ionic', tone: '#4f8cff' },
        { name: 'TypeScript', icon: 'images/stack-icons/typescript.svg', iconAlt: 'TypeScript', tone: '#3178c6' },
        { name: 'JavaScript', icon: 'images/stack-icons/javascript.svg', iconAlt: 'JavaScript', tone: '#f7df1e' }
      ]
    },
    {
      title: 'Backend',
      items: [
        { name: 'Laravel', icon: 'images/stack-icons/laravel.svg', iconAlt: 'Laravel', tone: '#ff2d20' },
        { name: 'PHP', icon: 'images/stack-icons/php.svg', iconAlt: 'PHP', tone: '#787cb5' }
      ]
    },
    {
      title: 'Datos',
      items: [
        { name: 'PostgreSQL', icon: 'images/stack-icons/postgresql.svg', iconAlt: 'PostgreSQL', tone: '#336791' },
        { name: 'MySQL', icon: 'images/stack-icons/mysql.svg', iconAlt: 'MySQL', tone: '#4479a1' },
        {
          name: 'SQL Server',
          icon: 'images/stack-icons/microsoftsqlserver.svg',
          iconAlt: 'Microsoft SQL Server',
          tone: '#cc2927'
        },
        { name: 'Power BI', icon: 'images/stack-icons/powerbi.svg', iconAlt: 'Power BI', tone: '#f2c811' }
      ]
    },
    {
      title: 'Infraestructura',
      items: [
        { name: 'Git', icon: 'images/stack-icons/git.svg', iconAlt: 'Git', tone: '#f05032' },
        { name: 'GitHub', icon: 'images/stack-icons/github.svg', iconAlt: 'GitHub', tone: '#f0f6fc' },
        { name: 'Linux', icon: 'images/stack-icons/linux.svg', iconAlt: 'Linux', tone: '#f7b500' }
      ]
    }
  ];

  readonly learningItems: LearningItem[] = [
    {
      name: 'Spring Boot',
      description: 'Desarrollo de APIs y servicios con Java.',
      icon: 'images/stack-icons/spring.svg',
      tone: '#6db33f'
    },
    {
      name: 'Docker',
      description: 'Contenedores y entornos reproducibles.',
      icon: 'images/stack-icons/docker.svg',
      tone: '#2496ed'
    },
    {
      name: 'AWS',
      description: 'Servicios cloud y despliegues en la nube.',
      icon: 'images/stack-icons/amazonwebservices.svg',
      tone: '#ff9900'
    },
    {
      name: 'GitHub Actions',
      description: 'Automatización de pruebas y despliegues.',
      icon: 'images/stack-icons/githubactions.svg',
      tone: '#2088ff'
    },
    {
      name: 'Inglés',
      description: 'Práctica continua para comunicación profesional.',
      badge: 'EN',
      tone: '#a78bfa'
    }
  ];

  readonly projects: Project[] = [
    {
      title: 'GastoTrack',
      role: 'Full-Stack',
      summary:
        'Sistema web para control de gastos, aprobaciones y reportes operativos.',
      impact:
        'Centraliza el seguimiento financiero y reduce trabajo manual en procesos internos.',
      stack: ['Angular', 'Laravel', 'PostgreSQL', 'Docker'],
      category: 'Operación',
      accent: '#4f8cff'
    },
    {
      title: 'Enlace PWA',
      role: 'Mobile',
      summary:
        'Aplicación PWA para gestión de documentos, encuestas y notificaciones internas.',
      impact:
        'Mejora el acceso desde cualquier dispositivo y simplifica flujos para equipos en campo.',
      stack: ['Ionic', 'Angular', 'TypeScript', 'Capacitor'],
      category: 'Movilidad',
      accent: '#8b5cf6'
    },
    {
      title: 'Dashboard Analítico',
      role: 'Data',
      summary:
        'Panel de análisis con indicadores de ventas, inventarios y nómina.',
      impact:
        'Acelera la toma de decisiones con visualizaciones y métricas accionables.',
      stack: ['Python', 'Pandas', 'Power BI', 'SQL'],
      category: 'Datos',
      accent: '#10b981'
    }
  ];

  readonly career: CareerItem[] = [
    {
      period: '10/2017 - Actualidad',
      title: 'Ingeniero Desarrollador de Software / Coordinador de TI',
      company: 'Lapisa · La Piedad, Michoacán',
      description:
        'Desarrollo y mantenimiento de soluciones web, móviles e integraciones para procesos empresariales.',
      points: ['Angular + Ionic', 'APIs REST + Epicor', 'Bases de datos SQL', 'Coordinación de TI']
    },
    {
      period: '02/2017 - 10/2017',
      title: 'Ingeniero Desarrollador de Software',
      company: 'Nu3 · La Piedad, Michoacán',
      description:
        'Participación en el ciclo completo de desarrollo y soporte de soluciones web orientadas al negocio.',
      points: ['Análisis y diseño', 'Desarrollo web', 'Pruebas y mantenimiento']
    },
    {
      period: '05/2016 - 12/2016',
      title: 'Ingeniero Analista de Software (Web · Mobile · UX)',
      company: 'Glouu Technologies · La Piedad, Michoacán',
      description:
        'Desarrollo de aplicaciones web y móviles con enfoque en usabilidad y experiencia de usuario.',
      points: ['Interfaces web y mobile', 'Análisis de requerimientos', 'Pruebas funcionales']
    },
    {
      period: '01/2016 - 04/2016',
      title: 'Residente profesional',
      company: 'IkonLAB Laboratorio de Diseño · Santiago de Querétaro',
      description:
        'Participación en proyectos de desarrollo de software durante la residencia profesional.',
      points: ['Análisis', 'Construcción de funcionalidades', 'Pruebas']
    }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
