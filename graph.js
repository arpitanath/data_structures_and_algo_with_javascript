const rl=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function buildMap() {
    let memo={},memor={},lev={};
    let start = "000000000".split('');
    let ind=0;
    memo[ind]=start;
    memor[start]=ind;
    lev[start]=0;

    let dx=[-1,0,0,0,+1];
    let dy=[0,-1,0,+1,0];

    let q = [];
    q.push(start);

    while(q.length!=0){
        let c = q.shift();
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                let cur=[...c];
                for(let k=0;k<5;k++){
                    if(i+dx[k]>=0 && i+dx[k]<3 && j+dy[k]>=0 && j+dy[k]<3){
                        let t=(i+dx[k])*3 + j+dy[k];
                        cur[t]=(cur[t]=='0')?'1':'0';
                    }
                }
                ind++;
                if(!memor.hasOwnProperty(cur)){
                    lev[cur]=lev[c]+1;
                    memo[ind]=cur;
                    memor[cur]=ind;
                    q.push(cur);
                }
            }
        }
    }

    return [memo, memor,lev];
}

function solve(target) {
    return memos[2][target];
}

let lines=[]
let memos=buildMap();

rl.on('line', line=>{
    lines.push(line);
}).on('close',()=>{
    let tests=parseInt(lines.shift());
    for(let i=0;i<tests;i++){
        let inp=[];
        for(let j=0;j<3;j++){
            inp.push(lines.shift());
        }
        let cleanInp=inp.join('').split('').map(c=>c=='*'?'1':'0');
        console.log(solve(cleanInp));
    }
});