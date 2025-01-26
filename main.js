var canvas=document.createElement('canvas');
const ctx=canvas.getContext('2d');
const players = [
['orange','u',150,100,[]],
['blue','d',150,200,[]]
];
ctx.fillStyle='black';
ctx.fillRect(0,0,canvas.width,canvas.width);
const mainloop = setInterval(()=>{
for(let player in players){
const oldCoords=[player[2],player[3]];
switch(player[1]){
case'u':{
player[4].push(oldCoords);
player[3]++;
break;
}
case'd':{
player[4].push(oldCoords);
player[3]--;
break;
}
case'l':{
player[4].push(oldCoords);
player[2]++;
break;
}
case'r':{
player[4].push(oldCoords);
player[2]--;
break;
}
}
ctx.fillStyle=player[0];
ctx.fillRect(player[2],player[3],3,3);
for(let coord in player[4]){
ctx.fillRect(coord[0],coord[1],2,2);
}
for(let coord in players[0][4]){
if([player[2],player[3]]==coord){
player[0]='black';
alert(`${player[0]} has crashed`);
}
}
}
}, 100); 
addEventListener('keydown',(event)=>{
switch(event.key){
case'i':{
players[0][1]='u';
break;
}
case'j':{
players[0][1]='l';
break;
}
case'k':{
players[0][1]='d';
break;
}
case'l':{
players[0][1]='r';
break;
}
case'w':{
players[1][1]='u';
break;
}
case'a':{
players[1][1]='l';
break;
}
case's':{
players[1][1]='d';
break;
}
case'd':{
players[1][1]='r';
break;
}
default:break;
}
});