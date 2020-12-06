//////////////////1. Color Analyzer
let randomColor = (color) => {
  switch (color) {
    case 'red':
      console.log('Red is a very emotionally intense color.');
      break;

    case 'blue':
      console.log('Blue is the color of the sky and sea.');
      break;

    case 'green':
      console.log('Green has strong emotional correspondence with safety.');
      break;

    case 'yellow':
      console.log(
        'Yellow is the most luminous of all the colors of the spectrum.'
      );
      break;

    default:
      console.log(`The color is ${color}`);
      break;
  }
};

randomColor('red');

//////////////////2. Grading
let gradeComment = (grade) => {
  switch (true) {
    case grade >= 100:
      console.log('Exceeeds our expectations!');
      break;

    case grade >= 95:
      console.log('Does neat, thorough work!');
      break;

    case grade >= 90:
      console.log('Listens and follows directions well.');
      break;

    case grade >= 85:
      console.log('Takes direction well and instantly applies them.');
      break;

    case grade >= 80:
      console.log('Has demonstrated very good progress.');
      break;

    case grade >= 75:
      console.log('Has shown noticeable improvement!');
      break;

    case grade <= 74:
      console.log('Requires guidance to remain focused and complete tasks.');
      break;

    default:
      break;
  }
};

gradeComment(73);

//////////////////3. Fruits
let whatFruit = (fruit) => {
  switch (fruit) {
    case 'banana':
      console.log(
        'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.'
      );
      break;

    case 'orange':
      console.log(
        'The orange is the fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. '
      );
      break;

    case 'strawberry':
      console.log(
        'The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. '
      );
      break;

    case 'apple':
      console.log(
        'An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.'
      );
      break;

    default:
      console.log(`This fruit is ${fruit}`);
      break;
  }
};

whatFruit('apple');

//////////////////4. Percentage Complete
let percentageComplete = (completed) => {
  switch (true) {
    case completed < 30:
      console.log('Still a long way to go');
      break;

    case completed >= 30 && completed <= 50:
      console.log('Slowly getting there');
      break;

    case completed > 50 && completed <= 80:
      console.log('You can do it!');
      break;

    case completed > 80 && completed <= 99:
      console.log('This is the last push!');
      break;

    default:
      console.log("You're there. Well done!");
      break;
  }
};

percentageComplete(80);

//////////////////5. Differences

//Use switch statement if you need many values that requires similar code. Otherwise use if/else statement
