const box = document.querySelector(".box");
const products = document.querySelector(".products");
const banner = document.querySelector(".banner");
const url = "http://localhost:3600/";


const render = (data) => {
    box.innerHTML = data.map((item) => `<div class="flex flex-col justify-between w-72 gap-3 shadow-lg rounded-2xl p-4 hover:bg-slate-100 hover:shadow-2xl transition-colors duration-500 ease-in-out">
                <div><img src="${item.img}" alt="img"></div>
                <div><h1 class="text-2xl font-semibold">${item.text}</h1></div>
                <div><button class="items-end bg-green-400 text-white p-2 rounded-xl w-full active:bg-gray-400" data-path=${item.name}>Select</button></div>
            </div>`).join(" ");
};


const carsdRender = (productsData) => {
    products.innerHTML = productsData.map((item) =>
        `
    <div class="flex flex-col items-center gap-3 shadow-lg hover:shadow-2xl rounded-2xl p-4 active:bg-red-700 active:text-white transition-colors duration-500 ease-in-out hover:font-bold">
                <img src="${item.img}" alt="img" class="rounded-2xl">
                <h1 class="text-sm font-semibold">${item.title}</h1>
                <h1 class="text-xl font-semibold">${item.brand}</h1>

                <div>
                    <div class="flex">
                        <h1 class="text-md font-semibold">${item.price}</h1>
                        <h1 class="text-md font-semibold">${item.color}</h1>
                        <h1 class="text-md font-semibold">${item.ram}</h1>
                    </div>

                    <div class="flex">
                        <h1 class="text-md font-semibold">${item.geForce}</h1>
                        <h1 class="text-md font-semibold">${item.core}</h1>
                        <h1 class="text-md font-semibold">${item.display}</h1>
                    </div>
                    
                    <div class="flex">
                        <h1 class="text-md font-semibold">${item.memory}</h1>
                        <h1 class="text-md font-semibold">${item.weight}</h1>
                        <h1 class="text-sm font-semibold">${item.core}</h1>
                    </div>
                    
                </div>
            </div>
    `).join(" ")
};




const getData = async () => {
    try {
        const res = await fetch(`${url}${"catalog"}`);
        const data = await res.json();
        render(data)

    } catch (error) {
        console.log("error");
    }
};

getData()






box.addEventListener("click", (e) => {
    let name = e.target.dataset.path

    const getProductsData = async () => {
        try {
            const resl = await fetch(`${url}${name}`);
            const productsData = await resl.json();
            carsdRender(productsData)
        } catch (error) {
            console.log("error");
        }
    };

    getProductsData()

})
