export interface IProject {
    id:           string;
    isTop:        boolean;
    portadas:     string[];
    name:         string;
    tags:         string[];
    description:  string;
    Repositorio:  string;
    Demo:         string | null;
    technologies: Technology[];
}

export interface Technology {
    name: string;
    icon: string;
}
