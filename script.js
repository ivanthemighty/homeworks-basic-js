function atm(){
    let bankAcc = 5000;
    let passcode = `1234`;
    console.log(`Pick an option: `);
    console.log(`-------------------------------------------`);
    console.log(`1) Withdraw money`);
    console.log(`2) Check your bank condition`);
    console.log(`3) Change your passcode`);
    console.log(`4) Exit`);
    let number = parseInt(prompt(`Choose an option from above: `))
    let condition = 0;
    switch(number) {
        case 1:
        console.log(`1) 100 $`);
        console.log(`2) 500 $`);
        console.log(`3) 5000 $`);
        console.log(`4) 10000 $`);
        let pick = parseInt(prompt('Choose your withdraval: '));
        switch(pick) {
            case 1:
                if((bankAcc - 100) >= 0) {
                    condition = bankAcc - 100;
                    console.log('--------------------------------------')
                    console.log(`Your bank account have ${bankAcc}$ and you can withdraw 100$`);
                    console.log(`Your current condition is ${condition}`)
                    console.log('--------------------------------------')
                } else {
                    console.log('--------------------------------------')
                    console.log(`Your bank account havent got enough money!!`)
                    console.log('--------------------------------------')
                }
            break;
            case 2:
                if((bankAcc - 100) >= 0) {
                    condition = bankAcc - 500;
                    console.log('--------------------------------------')
                    console.log(`Your bank account have ${bankAcc}$ and you can withdraw 500$`);
                    console.log(`Your current condition is ${condition}`)
                    console.log('--------------------------------------')
                } else {
                    console.log('--------------------------------------')
                    console.log(`Your bank account havent got enough money!!`)
                    console.log('--------------------------------------')
                }
            break;
            case 3:
                if((bankAcc - 5000) >= 0) {
                    condition = bankAcc - 5000;
                    console.log('--------------------------------------')
                    console.log(`Your bank account have ${bankAcc}$ and you can withdraw 5000$`);
                    console.log(`Your current condition is ${condition}`);
                    console.log('--------------------------------------')
                } else {
                    console.log('--------------------------------------')
                    console.log(`Your bank account havent got enough money!!`);
                    console.log('--------------------------------------')
                }
            break;
            case 4:
                if((bankAcc - 10000) >= 0) {
                    condition = bankAcc - 500;
                    console.log('--------------------------------------')
                    console.log(`Your bank account have ${bankAcc}$ and you can withdraw 10000$`);
                    console.log(`Your current condition is ${condition}`)
                    console.log('--------------------------------------')
                } else {
                    console.log('--------------------------------------')
                    console.log(`Your bank account havent got enough money!!`)
                    console.log('--------------------------------------')
                }
            break;
            default: 
            console.log('--------------------------------------')
                console.log(`Wrong option`);
                console.log('--------------------------------------')
                return;
        }
        return;
        case 2: 
            console.log('--------------------------------------')
            console.log(`Your bank account has ${bankAcc}$`);
            console.log('--------------------------------------')
            return;
        
        case 3: 
            console.log('--------------------------------------')
            console.log(`Change your passcode`);
            console.log('--------------------------------------')
            let pass = prompt(`Enter your current pass: `)
            if(pass === passcode) {
                console.log('Your new passcode')
                passcode = prompt('Enter 4 digits: ');
                return;
            } else {
                console.log('Wrong passcode');
                return;
            }
            return;

        case 4: 
        console.log('--------------------------------------')
        console.log(`Succesfull exit`);
        console.log('--------------------------------------')
        return;
    }
}   

// let cashAsk = parseInt(prompt(`How much money you want: `));
atm();
