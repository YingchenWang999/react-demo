async function asyncFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, Math.random() * 1000);
  });
}

const array = [asyncFunc(1), asyncFunc(2), asyncFunc(3)];

async function processArray(array) {
  for (let i = 0; i < array.length; i++) {
    const result = await asyncFunc(array[i]);
    console.log(result); // 按顺序输出每次异步操作的结果
  }
}

processArray(array);
