function run(character) {
	/*
	* Write your code below; return type and arguments should be according to the problem\'s requirements
	*/
	
    test = character;

    //url = 'https://challenges.hackajob.co/swapi/api/people/';
    
    url = 'https://swapi.dev/api/people';

    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    data = request.responseText

    let cabecalho = JSON.parse(data);
    result = [];
    result = cabecalho.results;

    //corpo.innerHTML = '';
    numberOfFilms = null

    let controle = 0;
    //let entrada = 0;
    films = [];
    filmsSlice = [];

    if(cabecalho.next!=''){
        url = cabecalho.next;
        entrar = 0;
    }
    else{
        entrar = 1;
    }

    while (controle==0){
        for (var j = 0; j < result.length; j++) {              
                
            if (character == result[j].name){
                numberOfFilms = result[j].films.length;
                films = result[j].films;
                controle=1;
                break;
            }
        }   
        if (entrar==0 && controle==0){
            //entrada++;
            let request = new XMLHttpRequest()
            request.open("GET", url, false)
            request.send()
            data = request.responseText

            let cabecalho = JSON.parse(data);
            //let corpo = document.getElementById("main");
            result = [];
            result = cabecalho.results;

            if(cabecalho.next!=null){
                url = cabecalho.next;
                entrar = 0;
            }
            else{
                entrar = 1;
            }
        }
        else{
            controle=1;
        }
    }

    if (films!=[]){
        for(var j = 0; j<films.length;j++){
            var01 = films[j].split('/');
            var02 = var01[4]+""+var01[5];
            filmsSlice.push(var02);
        }
    }
	return numberOfFilms;
}
run("Yoda")
run("Luke Skywalker")
run("Tion Medon")
run("Beru Whitesun lars")
run("Obi-Wan Kenobi")
run("Nien Nunb")