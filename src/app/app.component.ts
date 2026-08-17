import { Component, HostListener } from '@angular/core';

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
  icon?: string;
  iconLabel?: string;
  iconWide?: boolean;
  logos?: ProjectLogo[];
};

type ProjectLogo = {
  name: string;
  icon: string;
  tone: string;
  wide?: boolean;
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
  projectStartIndex = 0;
  visibleProjectCount = 3;

  constructor() {
    this.updateProjectPageSize();
  }

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
      title: 'Dido',
      role: 'Mobile + Backend',
      summary:
        'Directorio de negocios y servicios locales que ofrecen servicio a domicilio en tu ciudad.',
      impact:
        'Permite descubrir productos, servicios, ubicación, teléfono, redes sociales, promociones y restricciones desde una aplicación publicada en Google Play y App Store. La operación se administra desde un portal web.',
      stack: ['Ionic', 'PHP', 'MySQL', 'API REST', 'Portal web'],
      category: 'Aplicación móvil',
      accent: '#f59e0b',
      icon: 'images/project-icons/dido.png',
      iconLabel: 'Aplicación móvil · App Store y Google Play'
    },
    {
      title: 'Enlace',
      role: 'Full-Stack + Mobile',
      summary:
        'Aplicación interna y PWA de LAPISA para centralizar solicitudes, actividades, notificaciones y documentos.',
      impact:
        'Facilita la operación diaria y el intercambio controlado de documentos con clientes y proveedores autorizados. Disponible en Google Play y App Store.',
      stack: ['Ionic', 'TypeScript', 'PHP', 'PostgreSQL', 'API REST', 'Epicor'],
      category: 'Operación empresarial',
      accent: '#06b6d4',
      icon: 'images/project-icons/enlace.png',
      iconLabel: 'Aplicación móvil y PWA · App Store y Google Play'
    },
    {
      title: 'Nexhum',
      role: 'Full-Stack',
      summary:
        'Sistema integral de Capital Humano para gestionar nómina, capacitaciones, vacaciones, permisos, marcajes y organigrama.',
      impact:
        'Centraliza procesos de personal en un portal empresarial y facilita la administración de información clave para la operación de la empresa.',
      stack: ['Angular 20', 'TypeScript', 'Angular Material', 'PostgreSQL', 'Laravel', 'API REST'],
      category: 'Capital humano',
      accent: '#0ea5e9',
      icon: 'images/project-icons/nexhum.png',
      iconLabel: 'Sistema integral de Capital Humano',
      iconWide: true
    },
    {
      title: 'Integración Epicor + Salesforce',
      role: 'Integraciones + Backend',
      summary:
        'Integración empresarial para conectar la información de Epicor con Salesforce y automatizar el registro de pagos bancarios.',
      impact:
        'Facilita a los representantes de ventas la consulta de disponibilidad de productos en Salesforce y reduce tiempos de captura y errores al extraer información de fichas de pago con apoyo de herramientas de IA e integrarla a Epicor.',
      stack: ['Epicor', 'Salesforce', 'API REST', 'Automatización', 'IA aplicada'],
      category: 'Empresarial',
      accent: '#0f766e',
      iconLabel: 'Epicor + Salesforce · Automatización con IA',
      logos: [
        { name: 'Epicor', icon: 'images/stack-icons/epicor.png', tone: '#0f6070', wide: true },
        { name: 'Salesforce', icon: 'images/stack-icons/salesforce.svg', tone: '#00a1e0' }
      ]
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

  get visibleProjects(): Project[] {
    const count = Math.min(this.visibleProjectCount, this.projects.length);

    return Array.from({ length: count }, (_, offset) => {
      return this.projects[(this.projectStartIndex + offset) % this.projects.length];
    });
  }

  get projectCounterLabel(): string {
    if (this.visibleProjectCount === 1) {
      return `${this.projectStartIndex + 1} de ${this.projects.length} proyectos`;
    }

    return `${this.visibleProjectCount} de ${this.projects.length} proyectos`;
  }

  @HostListener('window:resize')
  handleWindowResize(): void {
    this.updateProjectPageSize();
  }

  showPreviousProjects(): void {
    this.projectStartIndex =
      (this.projectStartIndex - 1 + this.projects.length) % this.projects.length;
  }

  showNextProjects(): void {
    this.projectStartIndex = (this.projectStartIndex + 1) % this.projects.length;
  }

  private updateProjectPageSize(): void {
    const nextCount =
      typeof window === 'undefined' ? 3 : window.innerWidth <= 760 ? 1 : window.innerWidth <= 1080 ? 2 : 3;

    if (nextCount !== this.visibleProjectCount) {
      this.visibleProjectCount = nextCount;
      this.projectStartIndex = 0;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
