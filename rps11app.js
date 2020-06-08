//rock
const rock_div=document.getElementById('rock')
//fire
const fire_div=document.getElementById('fire')
//scissors
const scissors_div=document.getElementById('scissors')
//human
const human_div=document.getElementById('human')
//wolf
const wolf_div=document.getElementById('wolf')
//sponge
const sponge_div=document.getElementById('sponge')
//paper
const paper_div=document.getElementById('paper')
//air
const air_div=document.getElementById('air')
//water
const water_div=document.getElementById('water')
//devil
const devil_div=document.getElementById('devil')
//gun
const gun_div=document.getElementById('gun')

//scorebord
let userScore=0;
let computerScore=0;
let computerscoreSpan =document.getElementById('computer-score')
let userscoreSpan =document.getElementById('user-score')
const outcome=document.querySelector('.results')


function randomComputer(){
    const choices=['rock','fire','scissors','human','wolf','sponge','paper','air','water','devil','gun']
    const randommer=Math.floor(Math.random()*10)    
    return choices[randommer]
}

function winner(userpick, computerpick){
    userScore++
    userscoreSpan.innerText=userScore
    outcome.innerHTML=`${userpick} > ${computerpick} You Win!`
    document.getElementById(userpick).classList.add('winner')
    setTimeout(() => {document.getElementById(userpick).classList.remove('winner')
    }, 1000);
    document.getElementById('action').classList.add('actionwin')
    setTimeout(() => {document.getElementById('action').classList.remove('actionwin')
    }, 1000);
}

function looser(userpick, computerpick){
    computerScore++
    computerscoreSpan.innerHTML=computerScore
    outcome.innerHTML=`${userpick} < ${computerpick} You Loose!`
    document.getElementById(userpick).classList.add('looser')
    setTimeout(() => {document.getElementById(userpick).classList.remove('looser')
}, 1000);
    document.getElementById('action').classList.add('actionloose')
    setTimeout(() => {document.getElementById('action').classList.remove('actionloose')
}, 1000);


}

function draw(userpick, computerpick){
    outcome.innerHTML=`${userpick} = ${computerpick} Draw!`
    document.getElementById(userpick).classList.add('draw')
    setTimeout(() => {document.getElementById(userpick).classList.remove('draw')
}, 1000);
}

function game(userpick){
    const computerpick=randomComputer()
    switch((userpick+computerpick)){
        //rock winning
        case ('rockfire'):
        case ('rockscissors'):
        case ('rockhuman'):
        case ('rockwolf'):
        case ('rocksponge'):
        //fire winning
        case ('firescissors'):
        case ('firepaper'):
        case ('firehuman'):
        case ('firewolf'):
        case ('firesponge'):
        // scissors winning
        case ('scissorsair'):
        case ('scissorspaper'):
        case ('scissorshuman'):
        case ('scissorswolf'):
        case ('scissorssponge'):
        //human winning
        case ('humanwolf'):
        case ('humansponge'):
        case ('humanpaper'):
        case ('humanair'):
        case ('humanwater'):
        //wolf winning
        case ('wolfsponge'):
        case ('wolfpaper'):
        case ('wolfair'):
        case ('wolfwater'):
        case ('wolfdevil'):
        //sponge winning
        case ('spongepaper'):
        case ('spongeair'):
        case ('spongewater'):
        case ('spongedevil'):
        case ('spongegun'):
        //paper winning
        case ('paperair'):
        case ('paperrock'):
        case ('paperwater'):
        case ('paperdevil'):
        case ('papergun'):
        //air winning
        case ('airfire'):
        case ('airrock'):
        case ('airwater'):
        case ('airdevil'):
        case ('airgun'):
        //water winning
        case ('waterdevil'):
        case ('waterrock'):
        case ('waterfire'):
        case ('waterscissors'):
        case ('watergun'):
        //devil winning
        case ('devilrock'):
        case ('devilfire'):
        case ('devilscissors'):
        case ('devilgun'):
        case ('devilhuman'):
        //gun winning
        case ('gunrock'):
        case ('gunfire'):
        case ('gunscissors'):
        case ('gunhuman'):
        case ('gunwolf'):
            winner(userpick,computerpick )
        
            break;
        // rock loosing
        case ('rockpaper'):
        case ('rockair'):
        case ('rockwater'):
        case ('rockdevil'):
        case ('rockgun'):
        //fire loosing
        case ('firerock'):
        case ('fireair'):
        case ('firewater'):
        case ('firedevil'):
        case ('firegun'):
        //scissors loosing
        case ('scissorsrock'):
        case ('scissorsfire'):
        case ('scissorswater'):
        case ('scissorsdevil'):
        case ('scissorsgun'):
        //human  loosing
        case ('humanrock'):
        case ('humanfire'):
        case ('humanscissors'):
        case ('humandevil'):
        case ('humangun'):
        // wolf loosing
        case ('wolfrock'):
        case ('wolffire'):
        case ('wolfscissors'):
        case ('wolfgun'):
        case ('wolfhuman'):
        // sponge loosing
        case ('spongefire'):
        case ('spongehuman'):
        case ('spongewolf'):
        case ('spongerock'):
        case ('spongescissors'):
        //paper loosing
        case ('paperscissors'):
        case ('paperhuman'):
        case ('paperwolf'):
        case ('papersponge'):
        case ('paperfire'):
        //air loosing
        case ('airscissors'):
        case ('airhuman'):
        case ('airwolf'):
        case ('airpaper'):
        case ('airsponge'):
        //water loosing
        case ('waterhuman'):
        case ('waterwolf'):
        case ('waterpaper'):
        case ('watersponge'):
        case ('waterair'):
        //devil loosing
        case ('devilwolf'):
        case ('devilsponge'):
        case ('devilpaper'):
        case ('devilair'):
        case ('devilwater'):
        //gun loosing
        case ('gunsponge'):
        case ('gunpaper'):
        case ('gunair'):
        case ('gunwater'):
        case ('gundevil'):
            looser(userpick,computerpick );
            break;
        //equals
        case ('rockrock'):
        case ('firefire'):        
        case ('scissorsscissors'):
        case ('humanhuman'):
        case ('wolfwolf'):
        case ('spongesponge'):        
        case ('paperpaper'):
        case ('airair'):
        case ('waterwater'):        
        case ('devildevil'):
        case ('gungun'):
            draw(userpick,computerpick);
            break;
    }
}




function main(){
    rock_div.addEventListener('click', function(){
        game('rock')
    })
    fire_div.addEventListener('click', function(){
        game('fire')
    })
    scissors_div.addEventListener('click', function(){
        game('scissors')
    })
    human_div.addEventListener('click', function(){
        game('human')
    })
    wolf_div.addEventListener('click', function(){
        game('wolf')
    })
    sponge_div.addEventListener('click', function(){
        game('sponge')
    })
    paper_div.addEventListener('click', function(){
        game('paper')
    })
    air_div.addEventListener('click', function(){
        game('air')
    })
    water_div.addEventListener('click', function(){
        game('water')
    })
    devil_div.addEventListener('click', function(){
        game('devil')
    })
    gun_div.addEventListener('click', function(){
        game('gun')
    })
}
main()