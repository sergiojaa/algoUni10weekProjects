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
// chatgpt davixmare regular expressionebze. bevrad amartivebs :)))))
// function putNumber(){
//     let code = prompt('Enter code:');
//     const isLetter = /^[a-zA-Z]$/;
//     const isValidCode = /^[a-zA-Z]{2,6}\d*$/
//     if (!isLetter.test(code[0]) || !isLetter.test(code[1])) {
//         return 'pirveli da meore chanaweri unda ikos asoebi';
//     }
//     if (code.length < 2 || code.length > 6) {
//         return 'kodi 2-is da 6is raodenobas shoris unda ikos.';
//     }
//     if (!isValidCode.test(code)) {
//         return 'nomrebi shuashi ar unda ikos gamokenebuli.gchasvit boloshi';
//     }
//     const firstNumberIndex = code.search(/\d/);
//     if (firstNumberIndex !== -1 && code[firstNumberIndex] === '0') {
//         return 'The first number used cannot be "0".';
//     }
//     const hasInvalidChars = /[^\w]/;
//     if (hasInvalidChars.test(code)) {
//         return 'Dots, spaces, and punctuation marks are not allowed.';
//     }
//     return `kodi ${code} validuria`
// }
// console.log(putNumber())

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

// function guessTheNumbers(){
// while(true){
//     let level = Number(prompt('enter level 1,2,3'))
//     let maxNumber
//     if(level === 1){
//         maxNumber = 10
//     }else if(level === 2){
//         maxNumber = 100
//     }else if(level === 3){
//         maxNumber = 1000
//     }else{
//         console.log('enter 1, 2 or 3 ')
//         continue
//     }
//     let guessNumber = Math.floor(Math.random() * maxNumber) + 1
//     console.log(`unda gamoicno  1dan   ${maxNumber}-mde`);
//     let userNumber;
//     while(true){
//         userNumber = Number(prompt(`Enter your guess (1 to ${maxNumber}):`));
//         if(userNumber < guessNumber){
//             console.log('naklebia,scade tavidan')
//         }else if(userNumber > guessNumber){
//             console.log('metia tavidan scade')
//         }else{
//             console.log(`shen gamoicani ${guessNumber} kochag`)
//             break;
//         }
//     }
//     break; 

// }
// }

// guessTheNumbers()







// if(level1 === 2){

// }
// if(level1 === 3){

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
// პროგრამამ უნდა შეგეკითხოთ სახელი იქამდე, სანამ მომხმარებელი input-ში არაფერს არ ჩაწერს და 
//უბრალოდ enter-ს არ დააჭერს.
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
// let name = prompt('Enter the name');
// while (name.length > 0) {
//     name = prompt('Enter the name');
// }

// console.log('Winner');

// ### პროექტი 56 - Outdated - ვადაგასული

// შეერთებულ შტატებში, თარიღები, როგორც წესი, ფორმატდება თვე-დღე-წლის თანმიმდევრობით (MM/DD/YYYY). 
//ამ ფორმატში თარიღების დალაგება ძნელია, რადგან წელი პირველის ნაცვლად, ბოლოშია. სცადეთ ქრონოლოგიურად
// დალაგება, მაგალითად, 2/2/1800-ის, 3/3/1900-ის და 1/1/2000-ის ნებისმიერ პროგრამაში (მაგ., ცხრილებში).
// ამ ფორმატის თარიღები ასევე ბუნდოვანია. ჰარვარდი დაარსდა 1636 წლის 8 სექტემბერს, მაგრამ 9/8/1636 შეიძლება 
//წავიკითხოთ, როგორც 1636 წლის 9 აგვისტოც.

    // საბედნიეროდ, კომპიუტერები იყენებენ ISO 8601-ს, საერთაშორისო სტანდარტს, რომელიც აწესებს, რომ თარიღები
    // უნდა იყოს ფორმატირებული წელიწადი-თვე-დღე (YYYY-MM-DD) თანმიმდევრობით. არ აქვს მნიშვნელობა ქვეყანას -
    // დღეები და თვეები ორი ციფრით უნდა იყოს დაფორმატებული, ამიტომ იმ შემთხვევაში, როცა საჭიროა, თითოეული
    // წინ ნულებით უნდა „შეავსოთ“.

// შექმენით პროგრამა, რომელიც მოუწოდებს მომხმარებელს, ჩაწეროს თარიღი - თვე-დღე-წლის თანმიმდევრობით, 
//დაფორმატებული, როგორიცაა 9/8/1636 ან September 8, 1636, სადაც ამ უკანასკნელის თვე შეიძლება იყოს შემდგომი
// სიის რომელიმე მნიშვნელობა:

// [
// "January",
// "February",
// "March",
// "April",
// "May",
// "June",
// "July",
// "August",
// "September",
// "October",
// "November",
// "December"
// ]

// შემდეგ გამოიტანეთ იგივე თარიღი YYYY-MM-DD ფორმატში. თუ მომხმარებლის input-ი არ არის მოქმედი თარიღი არც ერთ ფორმატში, კვლავ სთხოვეთ მას ჩაწერა. დავუშვათ, რომ ყოველ თვეს აქვს არაუმეტეს 31 დღისა; არ არის საჭირო იმის გადამოწმება, აქვს თუ არა თვეს 28, 29, 30 ან 31 დღე.

// მაგალითად:

// ```shell
// $ Date: 9/8/1636
// $ 1636-09-08

// $ Date: 8 September 1636
// $ Date: September 8, 1636
// $ 1636-09-08

// $ Date: 8/9/1636
// $ 1636-08-09

// ```

// აუცილებელი მოთხოვნები:

// - შემთხვევითობის პრინციპით დასადგენად, გამოიყნეთ შესაბამისი ბიბლიოთეკა.
// - გააკეთეთ input-ის ვალიდაცია და დაყავით კოდი ფუნქციებად.