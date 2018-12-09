// m 이상 n 이하의 무작위 정수를 반환합니다.
function rand(m, n) {
    return m + Math.floor((n - m + 1)*Math.random());
}

// 크라운 앤 앵커 게임의 여섯 가지 도형 중 하나를 무작위 반환합니다.
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0,5)];
}

// 게임 시작..
let funds = 50; // 초기 자금 50 펜스로 시작
let round = 0;

while(funds > 0 && funds < 100) {
    round++;
    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds}p`);
    // 돈을 겁니다.
    const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
    let totalBet = rand(1, funds);
    if(new Date().getDay() === 3) {
        totalBet = 1;
        console.log("Wednesday!");
    }
    console.log(`\ttotalBet: ${totalBet}`);
    switch(totalBet) {
        case 7:
            totalBet = funds;
            bets.heart = totalBet;
            break;
        case 13:
            funds -= 1;
        case 11:
            totalBet = 0;
            break;
        case 21:
            totalBet = 21;
            break;
        default:
            console.log("No superstition here!");
            break;
    }
    // 그 판에 걸 돈을 분배합니다.
    let remaining = totalBet;
    do {
        let bet = rand(1, remaining);
        let face = randFace();
        bets[face] += bet;
        remaining -= bet;
    } while (remaining > 0);
    funds -= totalBet;
    console.log('\tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') +
    ` (total: ${totalBet} pence)`);

    // 주사위를 굴립니다.
    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join(', ')}`);

    // 그림을 맞췄으면 돈을 가져옵니다.
    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if(bets[face] > 0) winnings += bets[face];
    }
    funds += winnings;
    console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);


// for(let temp, i=0, j=1; j<30; temp = i, i = j, j = i + temp)
//     console.log(j);