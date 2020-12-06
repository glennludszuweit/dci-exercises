const input = document.querySelector('.input');
const input2 = document.querySelector('.input2');
const submitBtn = document.querySelector('.submit');

const timesStamps = [];
const openPrices = [];
const companyName = [];
const companyLogo = [];

async function companySym(symbol) {
  try {
    const key = 'btfnh1748v6rl6gbnml0';
    const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol.toUpperCase()}&token=${key}`;

    const res = await fetch(url);
    const data = await res.json();

    companyName.push(data.name);
    companyLogo.push(data.logo);
  } catch (error) {
    console.log(error);
  }
}

async function candles(symbol, resolution) {
  try {
    const key = 'btfnh1748v6rl6gbnml0';
    const url = `https://finnhub.io/api/v1/stock/candle?symbol=${symbol.toUpperCase()}&resolution=${resolution.toUpperCase()}&from=1572651390&to=1575243390&token=${key}`;

    const res = await fetch(url);
    const data = await res.json();

    data.t.forEach((timestamp) => {
      console.log(timestamp);
      timesStamps.push(new Date(timestamp).toISOString().slice(0, 10));
    });

    data.o.forEach((openPrice) => {
      openPrices.push(openPrice);
    });
  } catch (error) {
    console.log(error);
  }
}

function submit() {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    candles(input.value, input2.value);
    companySym(input.value);
    input.value = '';
    input2.value = '';
  });
}

async function chartIt() {
  await submit();
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: timesStamps,
      datasets: [
        {
          label: companyName,
          data: openPrices,
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
    },
  });
}
chartIt();

// class Stock {
//   constructor(id, price) {
//     this.id = id;
//     this.price = price;
//     this.history = [{ date: new Date(), price: this.price }];
//   }
// }

// class BoughtStock extends Stock {
//   constructor(id, price, history, quantity) {
//     super(id, price, history);
//     this.history = this.history
//       .map((element) => {
//         return `DATE: ${element.date} PRICE: ${element.price}`;
//       })
//       .join(' ');
//     this.quantity = quantity;
//     this.boughtAt = this.price;

//     user1.addBoughtStock(this);
//     user1.recalcBalance();
//   }
// }

// class Portfolio {
//   constructor(cash, balance) {
//     this.cash = cash;
//     this.balance = balance;
//     this.stocks = [];
//   }

//   addBoughtStock(boughtStock) {
//     this.stocks.push(boughtStock);
//     this.cash = this.cash - boughtStock.price * boughtStock.quantity;
//   }

//   recalcBalance() {
//     let accumulatedValue = this.stocks.reduce((acc, stock) => {
//       return (acc += stock.price * stock.quantity);
//     }, 0);
//     this.balance = this.balance - accumulatedValue;
//   }
// }

// let user1 = new Portfolio(10000, 10000);

// let apple = new Stock('apple', 500);
// let xBox = new Stock('xBox', 299);

// let b1 = new BoughtStock(apple.id, apple.price, apple.history, 2);
// let b2 = new BoughtStock(xBox.id, xBox.price, xBox.history, 1);

// console.log(user1);
