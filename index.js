
console.log("CASE 1: USER DATA CLEANER");

// 1. String mentah dari form input
    const rawNames = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";
    console.log("String mentah:", rawNames);

// 2. Membersihkan whitespace di awal dan akhir string
    const cleanedString = rawNames.trim();
    console.log("Membersihkan whitespace:", cleanedString);

// 3. Mengubah jadi array nama
    const namesArray = cleanedString.split(",");
    console.log("Array nama:", namesArray);

// 4. Format tiap nama jadi lowercase tanpa spasi liar
    const formattedNames = namesArray.map(function(name) {
    return name.trim().toLowerCase();
    });
    console.log("Lowercase tanpa spasi:", formattedNames);

// 5. Menggabungkan kembali menjadi string
    const finalNames = formattedNames.join(" | ");
    console.log("Hasil:", finalNames);

console.log("CASE 2: E-Commerce Product Filter");

// Data produk
    const products = [
    { name: "Laptop", price: 1000, active: true },
    { name: "Mouse", price: 20, active: false },
    { name: "Keyboard", price: 50, active: true }
    ];
    console.log("Data produk:", products);

// 1. Saring produk yang cuma bernilai active: true (pakai .filter()).
    const activeProducts = products.filter(function(product) {
    return product.active === true;
    });
    console.log("Produk aktif:", activeProducts);

// 2. Buat array nama produk dengan huruf kapital
    const activeProductNames = activeProducts.map(function(product) {
    return product.name.toUpperCase();
    });
    console.log("Nama produk huruf kapital:", activeProductNames);

// 3. Hitung total harga
    const totalPrice = activeProducts.reduce(function(total, product) {
    return total + product.price;
    }, 0);
    console.log("Total harga produk aktif:", totalPrice);


