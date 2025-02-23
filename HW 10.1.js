let arr = [
    { userName: "Test", 
        lastName: "Test", 
        email: "test.test@gmail.com" },
    { userName: "Dmitro", 
        lastName: "Porohov", 
        email: "dmitro.porohov@yahoo.com" },
    { userName: "Andrii", 
        lastName: "", 
        email: "andrii@mail.ru" }
];


let trustedEmails = arr
    .map(user => user.email)
    .filter(email =>  /^[\w/]+(\.[\w/]+)@(gmail\.com|yahoo\.com)$/.test(email));

console.log(trustedEmails);

