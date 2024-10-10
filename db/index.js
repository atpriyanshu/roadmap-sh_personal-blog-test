var fs = require('fs');
var fileName = './db/data.json';

function init() {
  try {fs.readFileSync(fileName,'utf-8');}
  catch {fs.writeFileSync(fileName, '[]')}
}

function getData() {
  const rawData = fs.readFileSync(fileName, 'utf-8');
  const processedData = JSON.parse(rawData);
  return processedData;
}

function add(item) {
  const rawData = fs.readFileSync(fileName, 'utf-8');
  const processedData = JSON.parse(rawData);
  processedData.push(item);
  const compiledData = JSON.stringify(processedData);
  fs.writeFileSync(fileName, compiledData);
}

function edit(item, i) {
  const rawData = fs.readFileSync(fileName, 'utf-8');
  const processedData = JSON.parse(rawData);
  processedData[i] = item;
  const compiledData = JSON.stringify(processedData);
  fs.writeFileSync(fileName, compiledData);
}

exports.init = init;
exports.getData = getData;
exports.add = add;
exports.edit = edit;