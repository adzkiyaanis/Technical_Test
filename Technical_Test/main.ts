//Andi menjual beraneka ragam buah. Diketahui catatan buah yang dimiliki Andi saat iniadalah sebagai berikut.
type IFruit = {
    fruitId: number,
    fruitName: string,
    fruitType: 'IMPORT' | 'LOCAL',
    stock: number
  }
  
  const fruits: IFruit[] = [
    {
      fruitId: 1,
      fruitName: 'Apel',
      fruitType: 'IMPORT',
      stock: 10
    },
    {
      fruitId: 2,
      fruitName: 'Kurma',
      fruitType: 'IMPORT',
      stock: 20
    },
    {
      fruitId: 3,
      fruitName: 'apel',
      fruitType: 'IMPORT',
      stock: 50
    },
    {
      fruitId: 4,
      fruitName: 'Manggis',
      fruitType: 'LOCAL',
      stock: 100
    },
    {
      fruitId: 5,
      fruitName: 'Jeruk Bali',
      fruitType: 'LOCAL',
      stock: 10
    },
    {
      fruitId: 5,
      fruitName: 'KURMA',
      fruitType: 'IMPORT',
      stock: 20
    },
    {
      fruitId: 5,
      fruitName: 'Salak',
      fruitType: 'LOCAL',
      stock: 150
    }
  ]

  //1. Buah apa saja yang dimiliki Andi? (fruitName)

  const fruitNames: string[] = fruits.map((fruit: IFruit) => fruit.fruitName);
console.log(fruitNames);

//bagaimana jika case apel dan Apel, Kurma dan KURMA supaya dilihat dri sisi 1 user
//Mengubah seluruh nama buah menjadi lowercase dengan normalisasi
const normalizedFruits: IFruit[] = fruits.map(fruit => ({
  ...fruit,
  fruitName: fruit.fruitName.toLowerCase()
}));

// Menampilkan nama buah yang dimiliki Andi setelah dinormalisasi
const fruitNamesnormalize: string[] = normalizedFruits.map((fruit: IFruit) => fruit.fruitName);
console.log(fruitNamesnormalize);

//mencoba menampilkan jumlah total buah dan stok yang tersedia setelah dinormalisasi:

const fruitCount: {[fruitName: string]: number} = {};
const fruitStock: {[fruitName: string]: number} = {};

normalizedFruits.forEach((fruit: IFruit) => {
  if (fruitCount[fruit.fruitName]) {
    fruitCount[fruit.fruitName] += 1;
    fruitStock[fruit.fruitName] += fruit.stock;
  } else {
    fruitCount[fruit.fruitName] = 1;
    fruitStock[fruit.fruitName] = fruit.stock;
  }
});

console.log('Jumlah buah yang dimiliki Andi:');
console.log(fruitCount);
console.log('Jumlah stok buah yang tersedia:');
console.log(fruitStock);

//2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah(fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja dimasing-masing wadah?
let importFruits: IFruit[] = [];
let localFruits: IFruit[] = [];

fruits.forEach(fruit => {
  if (fruit.fruitType === 'IMPORT') {
    importFruits.push(fruit);
  } else if (fruit.fruitType === 'LOCAL') {
    localFruits.push(fruit);
  }
});

console.log(`Jumlah wadah yang dibutuhkan: ${importFruits.length + localFruits.length}`);
console.log('Buah-buahan di setiap wadah:');
console.log(`Wadah IMPORT: ${importFruits.map(fruit => fruit.fruitName).join(', ')}`);
console.log(`Wadah LOCAL: ${localFruits.map(fruit => fruit.fruitName).join(', ')}`);

//3.  Berapa total stock buah yang ada di masing-masing wadah?
// Membuat objek untuk menyimpan total stok buah di masing-masing wadah
const stockByType: {[key: string]: number} = {}

// Menghitung total stok buah di masing-masing wadah
fruits.forEach((fruit) => {
  if (fruit.fruitType === 'IMPORT') {
    if (!stockByType['IMPORT']) {
      stockByType['IMPORT'] = 0
    }
    stockByType['IMPORT'] += fruit.stock
  } else if (fruit.fruitType === 'LOCAL') {
    if (!stockByType['LOCAL']) {
      stockByType['LOCAL'] = 0
    }
    stockByType['LOCAL'] += fruit.stock
  }
})
//

// Menampilkan hasil
console.log('Total stok buah di wadah IMPORT:', stockByType['IMPORT']);
console.log('Total stok buah di wadah LOCAL:', stockByType['LOCAL']);

//4. Apakah ada komentar terkait kasus di atas?
//pada awalnya saya mengira program menggunakan JavaScript namun ternyata program menggunakan TypeScript.