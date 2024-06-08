// ### პროექტი 49 - Vanity Plates - სანომრე ნიშნები

// მასაჩუსეტში შეგიძლიათ თქვენი მანქანისთვის თქვენთვის სასურველი სანომრე ნიშნები აიღოთ, იმ ასოებითა და ციფრებით, 
//რაც გნებავთ, მაგრამ რამდენიმე წესი უნდა იყოს დაცული:

// - ყველა სანომრე ნიშანი უნდა იწყებოდეს მინიმუმ ორი ასოთი.
// - შეიძლება შეიცავდეს მაქსიმუმ 6 სიმბოლოს (ასოს ან რიცხვს) და მინიმუმ 2 სიმბოლოს.
// - ციფრების გამოყენება არ შეიძლება სანომრე ნიშნის შუაში; ისინი ბოლოს უნდა იყოს. მაგალითად, AAA222 იქნება მისაღები,
// თუმცა AAA22A ამ წესს ვერ დააკმაყოფილებს.
// - გამოყენებული პირველი რიცხვი არ შეიძლება იყოს "0".
// - დაშვებული არ არის წერტილების, სივრცეების (space) და პუნქტუაციის ნიშნების გამოყენება.

// შექმენით პროგრამა, რომელიც მოუწოდებს მომხმარებელს სანომრე ნიშნის შეყვანისკენ და და შემდეგ output-ად გამოაქვს ან 
//valid (თუ ნიშნები აკმაყოფილებს ყველა მოთხოვნას), ან - Invalid. დაუშვით, რომ მომხმარებლის input-ის ყველა ასო იქნება დიდი.

// Example Output
// ```shell
// > Plate: HELLO
// > Valid
// > Plate: HELLO, WORLD
// > Invalid
// > Plate: GOODBYE
// > Invalid
// > Plate: 50
// > Invalid
// > Plate: BTCMP5
// > Valid
// > Plate: BTCMP0
// > Invalid
// ```
// let number = ['a000']
// if(!(typeof number[0] === 'string') || !(typeof number[1] === 'String') ){
//     console.log('sanomre nishani unda iwkebodes minimum ori asoti')
// }else if(!(number.length < 8) ||  ){
//     console.log('kodi mshvenieria')
// }

// ### პროექტი 50 - Handling Bad Input - ცუდი Input-ის მართვა

// 72-ის წესი სწრაფი მეთოდია იმის შესაფასებლად, თუ რამდენი ხანი დასჭირდება თქვენი ინვესტიციის გაორმაგებას.
//  ამის გამოსათვლელად 72 მის მოსალოდნელ შემოსავალზე (ROR) უნდა გავყოთ. ეს კარგი ინსტრუმენტია, რომელიც 
//  დაგეხმარებათ გაარკვიოთ, არის თუ არა აქციები, ობლიგაციები ან ანაბრები თქვენთვის მომგებიანი. ასევე, კარგი 
//  პროგრამაა input-ის გასატესტად, რადგან რადგან კომპიუტერებს ნულზე გაყოფა არ შეუძლიათ.

// იმის ნაცვლად, რომ პროგრამა შეაჩეროთ, როდესაც მომხმარებელი არასწორ input-ს შეიყვანს, შეგიძლიათ უბრალოდ 
// განაგრძოთ input-ის მოთხოვნა, სანამ არ მიიღებთ ვალიდურ ჩანაწერს. შექმენით კალკულატორი, რომელიც მოგთხოვთ 
// ინვესტიციის Rate of Return-ს (ROR) და გამოთვლის, რამდენი წელი დასჭირდება თქვენი ინვესტიციის გაორმაგებას.

// ფორმულა შემდეგია: years = 72 /r, სადაც r არის ROR-ის მითითებული მაჩვენებელი.

// Example Output

// ```shell
// > What is the rate of return? 0
// > Sorry. That's not a valid input.
// > What is the rate of return? ABC
// > Sorry. That's not a valid input.
// > What is the rate of return? 4
// > It will take 18 years to double your initial investment.
// ```

// - არ მისცეთ მომხმარებელს საშუალება, პროგრამაში ჩაწეროს 0.
// - არ მისცეთ საშუალება, ჩაწეროს არა-რიცხვითი input.
// - გამოიყენეთ ციკლი (loop) ცუდი input-ისთვის, რათა დარწმუნდეთ, რომ მომხმარებელი ვალიდურ მნიშვნელობას შეიყვანს.
// const question = parseInt(prompt('what is the rate of return?'))
// if(question === 0 ){
//     console.log('0 ar chawero')
// }else if(isNaN === question){
//     console.log('chaweret mxolodcifri')
// }else{
//     console.log(` it will take  ${72 / question} years to double initial investment`)
// }

// ### პროექტი 51 - Multiplication Table - გამრავლების ტაბულა

// შექმენით პროგრამა, რომელიც დააგენერირებს გამრავლების ტაბულას რიცხვებისთვის 0-დან 12-მდე.

// Example Output

// ```shell
// > 0 X 0 = 0
// > 0 X 1 = 0
// ...
// > 12 x 11 = 132
// > 12 x 12 = 144
// ```

// - გამოიყენეთ nested loop ამ პროგრამის დასასრულებლად.
// Generate the multiplication table for numbers 0 to 12
// for(let i = 0;i < 12;i++){
//     for(let j = 0;j <=12;j++){
//         console.log(` ${i} * ${j} = ${i * j} `)
//     }
// }
// ### პროექტი 52 - Karvonen Heart Rate

// Karvonen Heart Rate არის ერთ-ერთი მეთოდი თქვენი პულსის დადგენისთვის. შექმენით პროგრამა, 
// რომელიც შეეკითხება მოხმარებელს მის ასაკსა და გულისცემას, შემდეგ კი ამ მონაცემებზე დაყრდნობით 
// დაითვლის პულსს,
// სხვადასხვა ინტენსიურობის მიხედვით (55 % -იდან 95 % -მდე). გამოიტანეთ ამ ყველაფრის ამსახველი 
// ცხრილი. ისეთი, როგორიც მაგალითშია ნაჩვენები.

// - გამოსათვლელი ფორმულა: TargetHeartRate = (((220 - age) - restingHR) \* intensity) + restingHR

// მაგალითად:

// ```shell
// $ Resting Pulse: 65 Age: 22
// $ Intensity | Rate
// $ -------------|--------
// $ 55% | 138 bpm
// $ 60% | 145 bpm
// $ 65% | 151 bpm
// $ : : ( სხვა ხაზები )
// $ 85% | 178 bpm
// $ 90% | 185 bpm
// $ 95% | 191 bpm
// ```

// - ხელით არ დაწეროთ პროცენტები, გამოიყენეთ ციკლი და გაზარდეთ 5 პროცენტით 55-95 მნიშვნელობები.
// - გააკეთეთ ვალიდაცია, არ მისცეთ მომხმარებელს საშუალება რომ შეიყვანოს input-ში რიცხვების გარდა სხვა სიმბოლოები.

// ### პროექტი 53 - Guess The Number Game - თამაში რიცხვის გამოცნობაზე

// დაწერეთ თამაში Guess the Number, რომელსაც აქვს სირთულის სამი დონე. სირთულის პირველი დონე 
// იქნება რიცხვი 1-დან 10-მდე; მეორე - 1-დან 100-მდე, ხოლო მესამე - 1-დან 1000-მდე. მოითხოვეთ 
// სირთულის დონე და შემდეგ დაიწყეთ თამაში. კომპიუტერი ირჩევს შემთხვევით რიცხვს არჩეულ დიაპაზონში 
// და სთხოვს მოთამაშეს ამ რიცხვის გამოცნობას. ყოველ ჯერზე, როცა მოთამაშე გამოიცნობს, პროგრამამ მას უნდა 
// მიაწოდოს მინიშნება იმის შესახებ, არის თუ არა ეს რიცხვი გამოსაცნობ რიცხვზე მაღალი თუ დაბალი. კომპიუტერმა
//  ასევე უნდა აკონტროლოს გამოცნობის მცდელობების რაოდენობა. როგორც კი მოთამაშე გამოიცნობს სწორ რიცხვს,
//   კომპიუტერმა უნდა დაბეჭდოს, თუ რამდენი მცდელობა დასჭირდა მას სწორ პასუხამდე მისასვლელად და ჰკითხოს,
//    სურს თუ არა ხელახლა თამაში.

// მაგალითად:

// ```shell
// > Let's play Guess the Number.
// > Pick a difficulty level (1, 2, or 3): 1
// > I have my number. What's your guess? 1
// > Too low. Guess again: 5
// > Too high. Guess again: 2
// > You got it in 3 guesses!
// > Play again? n
// > Goodbye!
// ```

// - თამაშის დროს ისეთი input-ები, რომელიც არ იქნება რიცხვის ტიპის, გამოცნობის არასწორ მცდელობებად ჩათვალეთ.


// if(question1 > firstLevelNumber ){
//     console.log('cifri metia')
// }else if(question1 < firstLevelNumber){
//     console.log('cifri naklebia')
// }else{
//     console.log('kochag')
// }
// function calculate(){
//     let level = Number(prompt('enter the level 1,2,3'))
//     let firstLevelNumber = Math.floor(Math.random * 10) + 1
//     let userNumber = Number(prompt('enter the number'))
//    if(level === 1){
//     while(userNumber !== firstLevelNumber){
//         console.log('araswori ricxvi')
//     }
//    }
//    return 'kochag'

// }

// ### პროექტი 54 - Magic 8 Ball

// შექმენით Magic 8 Ball თამაშის პროგრამა, რომელიც მოთხოვს მომხმარებელს რაიმე კითხვის შეყვანას
// და პასუხად შემთხვევითობის პრინციპით გამოიტანს "Yes", "No" ან "Ask again later".

// მაგალითად:

// ```shell
// > Whats your question? Will I be rich and famous?
// > Ask again later.
// ```
// - შემთხვევითობის პრინციპით დასადგენად, გამოიყნეთ შესაბამისი ბიბლიოთეკა.
// - გააკეთეთ input-ის ვალიდაცია და დაყავით კოდი ფუნქციებად.

// ### პროექტი 55 - Picking a Winner - გამარჯვებულის არჩევა

// შექმნით პროგრამა, რომელიც შემთხვევითობის პრინციპით აარჩევს შეჯიბრში მოგებულ მონაწილეს.
// პროგრამამ უნდა შეგეკითხოთ სახელი იქამდე, სანამ მომხმარებელი input-ში არაფერს არ ჩაწერს და უბრალოდ enter-ს არ დააჭერს.
// ამის შემდეგ შემთხვევით უნდა აირჩიოს მოგებული მონაწილე.

// მაგალითად:

// ```shell
// $ Enter a name: Homer
// $ Enter a name: Bart
// $ Enter a name: Maggie
// $ Enter a name: Lisa
// $ Enter a name: Moe
// $ Enter a name:
// $ The winner is... Maggie.
// ```