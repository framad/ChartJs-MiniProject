var hargaProduk = []
var stok = []

var merkProduk = []

async function dummyChart () {
    await getData()
    const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: merkProduk,
      datasets: [{
        label: 'Brand',
        data: hargaProduk,
        borderWidth: 1
      },
      {
        label: 'Stok Produk',
        data: stok,
        borderWidth: 1
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
  dummyChart()

  async function getData() {
    const apiUrl = "https://dummyjson.com/products"

    const response = await fetch(apiUrl)
    const barChartData = await response.json()

    const harga = barChartData.products.map( (x) => x.price)
    const stock = barChartData.products.map( (x) => x.stock)
    const merk = barChartData.products.map( (x) => x.brand)

    hargaProduk = harga
    stok = stock
    merkProduk = merk 

  }

  getData()