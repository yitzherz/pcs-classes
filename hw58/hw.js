(function(){
    'use strict';

    function createAccount(){
        return {
            balance: 0,
            performTransaction:function(amount){
                this.balance += amount;
            }
        };
    }

    const account1 = createAccount();
    account1.performTransaction(200);
    console.log('account1.balance',account1.balance);
    account1.performTransaction(-20);
    console.log('account1.balance',account1.balance);
    const account2 = createAccount();
    account2.performTransaction(300);
    console.log('account2.balance',account2.balance);

    function transaction(amount){
        this.balance += amount;
    }

    transaction.call(account1,500);
    console.log('account1.balance',account1.balance);

    transaction.call(account2,-100);
    console.log('account2.balance',account2.balance);
}());