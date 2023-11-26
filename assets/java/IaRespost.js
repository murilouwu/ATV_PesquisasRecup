class IaRespost {
    constructor() {
        this.nameBOT = '';
        this.nameUser = '';
        this.topico = '';
    }
    Inicial(){
        let text = {
            'dev': {
                'creator': 'Murilo Gimenez',
                'class': '3DES'
            },
            'topico': this.topico,
            'apresentation': 'Seja Bem Vindo,',
            'perguntaInicial': 'Qual é o seu nome?',
            'informais': ['agora aqui, para começarmos', 'da turma do ', 'desconhecido']
        };

        let textFinal = text['apresentation']+' oh '+text['informais'][2]+' ao Sistema que mostrara: '+text['topico']+', feito pelo '+text['dev']['creator']+' '+text['informais'][1]+' '+text['dev']['class']+' '+text['informais'][0]+' '+text['perguntaInicial'];
        this.topico = 'Nome';

        return textFinal;
    }
    botResove(text){
        if(this.topico=='Nome'){
            this.nameUser = text;

            let textEnv = 'prazer em conhecelo '+this.nameUser+', mas vamos lá a pesquisa foi dividida em duas partes uma falando da plataforma web e a outra app, qual quer saber primeiro?';
            this.topico = 'search';
            return textEnv;
        }else if(this.topico=='search'){
            let possibible = [
                ["web", "site", "plataforma web", "primeira opção", "website", "online", "www"],
                ["app", "aplicativo", "segunda opção", "aplicação móvel", "mobile", "celular", "plataforma mobile"]
            ];            
            let minText = text.toLowerCase();
            this.topico = 'confirmação';
            
            if(possibible[0].some(pss => minText.includes(pss.toLowerCase()))){
                return 'bom, então vamos falar sobre a plataforma web certo?';
            }else if(possibible[1].some(pss => minText.includes(pss.toLowerCase()))){
                return 'bom, então vamos falar sobre a plataforma mobile certo?';
            }else{
                return 'Responda algo comprenssivel, favor'
            }
        }else if(this.topico == 'confirmação'){
            //confim
        }
    }
}

//pesquisas:
//plataforma nocode para web
//plataforma nocode para mobile