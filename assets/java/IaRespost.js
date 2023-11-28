let pesquisas = {
    'dev': {
        'name': 'Murilo Gimenez',
        'class': '3DES'
    },
    'Tema' : '',
    'textInicial': '',
    'search':{
        'quantidade':'duas',
        'titles':[
            'web',
            'app'
        ]
    },
    'questSearch':[
        'prazer em conhecelo',
        ', A pesquisa foi dividida em',
        ', qual quer saber primeiro'
    ],
    'choises':[
        ["web", "site", "plataforma web", "primeira opção", "website", "online", "www"],
        ["app", "aplicativo", "segunda opção", "aplicação móvel", "mobile", "celular", "plataforma mobile"]
    ],
    'pesquisa':{
        'web':{
            'Descrição Geral:':'A plataforma nocode para desenvolvimento web é uma abordagem inovadora que permite a criação de sites sem a necessidade de escrever código.',
            'Facilidade de Uso:':'Ideal para usuários sem conhecimento em programação, a plataforma nocode simplifica o processo de criação de sites, tornando-o acessível a uma ampla variedade de pessoas.',
            'Recursos Disponíveis:':'Oferece uma variedade de recursos e ferramentas visuais para design de páginas, gerenciamento de conteúdo e interatividade, eliminando a complexidade associada à codificação manual.',
            'Flexibilidade e Personalização:':'Permite a personalização flexível do design do site, facilitando a adaptação às necessidades específicas de cada projeto.',
            'Colaboração Eficiente:':'Facilita a colaboração entre equipes multidisciplinares, permitindo que designers, desenvolvedores e outros profissionais contribuam para o projeto sem barreiras técnicas.',
            'Rápido Desenvolvimento:':'Acelera significativamente o ciclo de desenvolvimento, possibilitando a criação rápida e eficiente de websites funcionais.'
        },
        'app':{
            'Desenvolvimento de Aplicativos Móveis sem Codificação:':'A plataforma nocode para desenvolvimento de aplicativos móveis é uma solução que permite criar aplicativos sem a necessidade de programação manual.',
            'Interface Amigável:':'Possui uma interface amigável e intuitiva, projetada para facilitar o processo de design e implementação de funcionalidades em aplicativos.',
            'Aceleração do Processo de Criação:':'Permite o desenvolvimento rápido de aplicativos móveis, reduzindo o tempo necessário para transformar ideias em produtos prontos para uso.',
            'Adaptação a Diferentes Plataformas:':'Oferece suporte à criação de aplicativos para diferentes plataformas, incluindo iOS e Android, simplificando a adaptação a diversos dispositivos.',
            'Testes e Iterações Simplificados:':'Facilita a realização de testes e iterações durante o desenvolvimento do aplicativo, proporcionando um ambiente eficiente para aprimorar a experiência do usuário.',
            'Ampla Variedade de Recursos:':'Disponibiliza uma ampla variedade de recursos prontos para uso, como integração de banco de dados, notificações push e outros elementos essenciais para aplicativos móveis.'
        },
    }
};

class IaRespost {
    constructor() {
        this.nameBOT = '';
        this.nameUser = '';
        this.topico = '';
    }
    Inicial(){
        pesquisas['Tema'] = this.topico;
        pesquisas['textInicial'] = 'Seja Bem Vindo, oh desconhecido, ao Sistema que mostrara a Pesquisa sobre a '+pesquisas['Tema']+', feito pelo '+pesquisas['dev']['name']+' da turma do '+pesquisas['dev']['class']+' agora aqui, para começarmos Qual é o seu nome?';
        this.topico = 'Nome';

        return pesquisas['textInicial'];
    }
    botResove(text){
        switch (this.topico){
            case 'Nome':
                this.nameUser = this.nameUser == ''? text:this.nameUser;
                let textEnv = pesquisas['questSearch'][0]+' '+this.nameUser+pesquisas['questSearch'][1]+' '+pesquisas['search']['quantidade']+' partes '+pesquisas['search']['titles'][0]+' e '+pesquisas['search']['titles'][1]+pesquisas['questSearch'][2]+' '+this.nameUser+'?';
                this.topico = 'search';
                return textEnv;
            
            case 'search':            
                let minText = text.toLowerCase();
                
                if(pesquisas['choises'][0].some(pss => minText.includes(pss.toLowerCase()))){
                    this.topico = 'PesquisaA';
                    return 'bom, então vamos falar sobre o '+pesquisas['search']['titles'][0]+' certo?';
                }else if(pesquisas['choises'][1].some(pss => minText.includes(pss.toLowerCase()))){
                    this.topico = 'PesquisaB';
                    return 'bom, então vamos falar sobre o '+pesquisas['search']['titles'][1]+' certo?';
                }else{
                    this.topico = 'Nome';
                    return 'Responda algo comprenssivel, favor!'
                }

            case 'PesquisaA':
                let textFinal = 'A pesquisa sobre o '+pesquisas['search']['titles'][0]+' do nocode, foi dividida em:';
                for(let i=0; i<pesquisas['pesquisa']['web'].length; i++){
                    textFinalq += '/n1) '+pesquisas['pesquisa']['web'];
                }
                return textFinal;

            case 'PesquisaB':
                return 'okB..';
        };
    }
}