// 1 მაგალითი

// console.log("walk the dog");

// freeze();

// console.log("clean the kitchen");
// console.log("play video games");

// function freeze() {
//   const start = Date.now();
//   while (Date.now() - start < 3000) {
//     console.log("please wait");
//   }
// }

//2 მაგალითი

function walkTheDog(cb) {
  setTimeout(() => {
    console.log("walk the dog");
    cb();
  }, 2000);
}

function cleanTheKitchen(cb) {
  setTimeout(() => {
    console.log("clean kitchen");
    cb();
  }, 5000);
}

function playGames(cb) {
  setTimeout(() => {
    console.log("play video games");
    cb();
  }, 1000);
}

walkTheDog(() => {
  cleanTheKitchen(() => {
    playGames();
  });
});

//3 მაგალითი
function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("walk the dog");
    }, 2000);
  });
}

function cleanTheKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("clean kitchen");
    }, 5000);
  });
}

function playGames() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const played = false;
      if (played) {
        resolve("play video games");
      } else {
        reject("oh god");
      }
    }, 1000);
  });
}
doChores();

async function doChores() {
  const x = await playGames();
  console.log(x);
}
