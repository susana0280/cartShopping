
// //_________________Base Datos Almacen shoppingStore__________
// const db={
//     methods:{
//         find:(id)=>{return db.items.find(item=>item.id===id)},
//         remove:(items)=>{
          
//           items.forEach(item=>{
//             const product=db.methods.find(parseInt(item.id))
//             product.qty=product.qty-item.qty
           
//             if(product.qty<0){
//                 product.qty=0
//                 alert("no hay suficiente stock")
//             }
           
//                 })
               
//         }
//     },
//     items:[
//         { id: 0, title: "Funko Pop", price: 250, qty: 5 },
//         { id: 1, title: "Harry Potter DVD", price: 345, qty: 50 },
//         { id: 2, title: "Phillips Hue", price: 1300, qty: 80 },
//     ]
// }




// //___________________Base Datos del Carrito shoppingCart___________________
// const shoppingCart={
//     items:[],
//     methods:{
//         add:(id,qty)=>{
         
//             const cartItem=shoppingCart.methods.get(id)
          
//          if(cartItem){
//              if(shoppingCart.methods.hasInventory(id,qty)){
//                 cartItem.qty+=qty
//                     }
//             else{
//               alert("no hay sufiencte stock")
//              }
//             }
//             else{
//                 shoppingCart.items.push({id,qty})
//                   }
//         },
//         remove:(id)=>{
            
//             const itemCart=shoppingCart.items.find(item=>item.id===id)
//             if(itemCart.qty>0){
//                 itemCart.qty--
            
//             }
//             else{
//                 shoppingCart.items=shoppingCart.items.filter(item=>item.id!==id)
              
//             }

//         },
//         count:()=>{
        
//             const totalCount=shoppingCart.items.reduce((acc,item)=>{
//                     return acc+item.qty
//                 },0)
//                 return totalCount
//         },
      
//         get:(id)=>{
//          const index=shoppingCart.items.findIndex(item=>item.id===id)
//              return   index >=0 ? shoppingCart.items[index]:null
//             },
//         getTotal:()=>{
//              let total=0
//              shoppingCart.items.forEach(item=>{
//                  const itemPrice=db.methods.find(parseInt(item.id))
//                  total=total+(itemPrice.price*item.qty)
              
//                 })
//                 return total
//         },

//         hasInventory:(id,qty)=>{
//             const dbItem=db.methods.find(parseInt(id))
          
//             const totalDbItems=dbItem.qty-qty
      
//             if(totalDbItems>=0){
              
//                 return true
//              }
//             if(totalDbItems<0){
//                 console.log("no hay stock")
               
//              }
//         },

//         purchase:()=>{
            
//             db.methods.remove(shoppingCart.items)
//         }

//     }

// }

// //_________Funcion numberToCurrency______
// function numberToCurrency(n){
   
//   return new Intl.NumberFormat('en-US',
//                     {maximumSignificantDigits:4,
//                       style:"currency",
//                       currency:'USD'  
//                     }).format(n)
//         }

// //__________Funcion renderStore_______________
// function renderStore(){
//    const html=db.items.map(item=>{
 
//     return `<div class="item">
//             <div class="title">${item.title}</div>
//             <div class="price">${numberToCurrency(item.price)}</div>
//             <div class="qty">Cantidad: ${item.qty}</div>
//             <div class="actions">
//                 <button class="addOperador" data-id=${item.id}>ADD TO SHOPPING CART</button>
//             </div>
//             </div>`
//    })

//    document.querySelector("#store-container").innerHTML=html.join("")


//    document.querySelectorAll(".addOperador").forEach(button=>{
//     button.addEventListener("click",e=>{
        
//         document.querySelector("#shopping-cart-container").classList.add("show")
//         document.querySelector("#shopping-cart-container").classList.remove("hide")
//         const id=button.getAttribute("data-id")
//         const item=db.methods.find(parseInt(id))
//         if(item && item.qty-1>0){
           
//                 shoppingCart.methods.add(id,1)
//                 renderShoppingCart()
              
//             }
//             else{
            
//              console.log("Ya no hay existencia de ese artículo")
           
//             }
            
//     })
  
// })

// }

// //___________________Funcion RenderShoppingCard______________

// function renderShoppingCart(){
//     document.querySelector("#shopping-cart-container").innerHTML=""
//     shoppingCart.items.map(item=>{
//         const dbItem=db.methods.find(parseInt(item.id))
//         const html=`<div class="item">
//                         <div class="title">${dbItem.title}</div>
//                         <div class="price">Precio: ${numberToCurrency(dbItem.price)}</div>
//                         <div class=>Cantidad: ${item.qty}</div>
//                         <div>Subtotal ${item.qty*dbItem.price}</div>
//                         <div class="actions">
//                             <button class="addOne" data-id=${item.id}>+</button>
//                             <button class="removeOne" data-id=${item.id}>-</button>
//                         </div>
//                         </div>`

//             const closeBotton=`<div class="closeButton">
//                             <button class="bClose">Close</button>
//                                 </div>`

//             const purchaseButton=shoppingCart.items.length>0 ?`<div class="cart-actions">
//                                     <button id="bPurchase">Purchase</button>
//                                     </div>`:""

//             const total=shoppingCart.methods.getTotal()
//             const totalContainer=`<div class="total">Total: ${numberToCurrency(total)}</div>`

//             document.querySelector("#shopping-cart-container").innerHTML+=closeBotton+html
//             document.querySelector(".totalContainer").innerHTML=totalContainer+purchaseButton
            
//             document.querySelectorAll(".addOne").forEach(button=>{
//                 button.addEventListener("click",e=>{
//                     const productId=button.getAttribute("data-id")
//                       shoppingCart.methods.add(productId,1)
//                       renderShoppingCart()
//                       renderStore()
//                 })

//             })

//             document.querySelectorAll(".removeOne").forEach(button=>{
//                 button.addEventListener("click",e=>{
//                     const productId=button.getAttribute("data-id")
//                     shoppingCart.methods.remove(productId)
//                     renderShoppingCart()
//                     renderStore()
//                 })

//             })


//             document.querySelector(".closeButton").addEventListener("click",e=>{
//                      document.querySelector("#shopping-cart-container").classList.remove("show")
//                      document.querySelector("#shopping-cart-container").classList.add("hide")
//                 })

//             const bPurchase=document.querySelector("#bPurchase")
        
//             if(bPurchase){
//                 bPurchase.addEventListener("click",e=>{
//                    shoppingCart.methods.purchase()
//                    renderShoppingCart()
//                    renderStore()
//                 })
//             }
            
    
//         })
       

// }



// renderStore()
//_________________________________________________________________________________
//_________________Base Datos Almacen shoppingStore__________
const db = {
    methods: {
        // Método para encontrar un producto en la base de datos por su ID
        find: (id) => { return db.items.find(item => item.id === id) },

        // Método para remover productos del almacén
        remove: (items) => {
            items.forEach(item => {
                // Busca el producto en la base de datos
                const product = db.methods.find(parseInt(item.id));
                // Reduce la cantidad del producto según el que se desea remover
                if(product.qty-item.qty>=0){
                    
                product.qty = product.qty - item.qty;
              
                }
                else{
                    alert("no hay stock")
                }
            });
        }
    },
    // Lista de productos disponibles en el almacén
    items: [
        { id: 0, title: "Funko Pop", price: 250, qty: 5 },
        { id: 1, title: "Harry Potter DVD", price: 345, qty: 50 },
        { id: 2, title: "Phillips Hue", price: 1300, qty: 80 },
    ]
}

//___________________Base Datos del Carrito shoppingCart___________________
const shoppingCart = {
    items: [], // Inicializa el carrito como vacío
    methods: {
        // Método para agregar un producto al carrito
        add: (id, qty) => {
            // Obtiene el producto del carrito si ya existe
            const cartItem = shoppingCart.methods.get(id);

            if (cartItem) {
                // Verifica si hay suficiente inventario antes de agregar
                if (shoppingCart.methods.hasInventory(id, qty)) {
                    cartItem.qty += qty; // Aumenta la cantidad en el carrito
                } else {
                    alert("no hay suficiente stock"); // Alerta de stock insuficiente
                }
            } else {
                // Si el producto no está en el carrito, lo agrega
                shoppingCart.items.push({ id, qty });
            }
        },
        
        // Método para remover un producto del carrito
        remove: (id) => {
            const itemCart = shoppingCart.items.find(item => item.id === id);
            // Si la cantidad en el carrito es mayor a 0, se disminuye
            if (itemCart.qty > 0) {
                itemCart.qty--;
            } else {
                // Si la cantidad es 0, se elimina del carrito
                shoppingCart.items = shoppingCart.items.filter(item => item.id !== id);
            }
        },
        
        // Método para contar el total de productos en el carrito
        count: () => {
            const totalCount = shoppingCart.items.reduce((acc, item) => {
                return acc + item.qty;
            }, 0);
            return totalCount; // Devuelve la cantidad total
        },

        // Método para obtener un producto del carrito por ID
        get: (id) => {
            const index = shoppingCart.items.findIndex(item => item.id === id);
            return index >= 0 ? shoppingCart.items[index] : null; // Devuelve el producto o null
        },
        
        // Método para calcular el total del carrito
        getTotal: () => {
            let total = 0;
            shoppingCart.items.forEach(item => {
                const itemPrice = db.methods.find(parseInt(item.id));
                total = total + (itemPrice.price * item.qty); // Calcula el subtotal por producto
            });
            return total; // Devuelve el total del carrito
        },

        // Método para verificar si hay suficiente inventario para un producto
        hasInventory: (id, qty) => {
            const dbItem = db.methods.find(parseInt(id));
            const totalDbItems = dbItem.qty - qty; // Calcula si hay suficiente stock

            if (totalDbItems >= 0) {
                
                return true; // Hay suficiente stock
            }
            if (totalDbItems < 0) {
             
                console.log("no hay stock"); // Mensaje en consola si no hay stock
            }
        },

        // Método para realizar la compra y descontar del inventario
        purchase: () => {
            db.methods.remove(shoppingCart.items); // Llama al método para remover productos del inventario
        }
    }
}

//_________Funcion numberToCurrency______
function numberToCurrency(n) {
    // Formatea un número a formato de moneda
    return new Intl.NumberFormat('en-US', {
        maximumSignificantDigits: 4,
        style: "currency",
        currency: 'USD'
    }).format(n);
}

//__________Funcion renderStore_______________
function renderStore() {
    const html = db.items.map(item => {
        // Crea el HTML para cada producto en la tienda
        return `<div class="item">
                <div class="title">${item.title}</div>
                <div class="price">${numberToCurrency(item.price)}</div>
                <div class="qty">Cantidad: ${item.qty}</div>
                <div class="actions">
                    <button class="addOperador" data-id=${item.id}>ADD TO SHOPPING CART</button>
                </div>
                </div>`;
    });

    // Inserta el HTML generado en el contenedor de la tienda
    document.querySelector("#store-container").innerHTML = html.join("");

    // Añade un evento a cada botón "ADD TO SHOPPING CART"
    document.querySelectorAll(".addOperador").forEach(button => {
        button.addEventListener("click", e => {
            document.querySelector("#shopping-cart-container").classList.add("show"); // Muestra el carrito
            document.querySelector("#shopping-cart-container").classList.remove("hide");
            const id = button.getAttribute("data-id"); // Obtiene el ID del producto
            const item = db.methods.find(parseInt(id)); // Busca el producto en la base de datos
            if (item && item.qty - 1 > 0) {
                shoppingCart.methods.add(id, 1); // Agrega un producto al carrito
                renderShoppingCart(); // Renderiza el carrito
            } else {
                console.log("Ya no hay existencia de ese artículo"); // Mensaje si no hay stock
            }
        });
    });
}

//___________________Funcion RenderShoppingCard______________
function renderShoppingCart() {
    // Limpia el contenedor del carrito antes de renderizar
    document.querySelector("#shopping-cart-container").innerHTML = "";
    shoppingCart.items.map(item => {
        const dbItem = db.methods.find(parseInt(item.id)); // Busca el producto en la base de datos
        const html = `<div class="item">
                        <div class="title">${dbItem.title}</div>
                        <div class="price">Precio: ${numberToCurrency(dbItem.price)}</div>
                        <div>Cantidad: ${item.qty}</div>
                        <div>Subtotal ${item.qty * dbItem.price}</div>
                        <div class="actions">
                            <button class="addOne" data-id=${item.id}>+</button>
                            <button class="removeOne" data-id=${item.id}>-</button>
                        </div>
                        </div>`;

        const closeBotton = `<div class="closeButton">
                            <button class="bClose">Close</button>
                                </div>`;

        const purchaseButton = shoppingCart.items.length > 0 ? `<div class="cart-actions">
                                    <button id="bPurchase">Purchase</button>
                                    </div>` : "";

        const total = shoppingCart.methods.getTotal(); // Obtiene el total de la compra
        const totalContainer = `<div class="total">Total: ${numberToCurrency(total)}</div>`;

        // Agrega el HTML del producto y el total al contenedor del carrito
        document.querySelector("#shopping-cart-container").innerHTML += closeBotton + html;
        document.querySelector(".totalContainer").innerHTML = totalContainer + purchaseButton;

        // Añade eventos a los botones para añadir o remover productos
        document.querySelectorAll(".addOne").forEach(button => {
            button.addEventListener("click", e => {
                const productId = button.getAttribute("data-id");
                shoppingCart.methods.add(productId, 1); // Aumenta la cantidad del producto en el carrito
                renderShoppingCart(); // Renderiza el carrito de nuevo
                renderStore(); // Renderiza la tienda para actualizar el stock
            });
        });

        document.querySelectorAll(".removeOne").forEach(button => {
            button.addEventListener("click", e => {
                const productId = button.getAttribute("data-id");
                shoppingCart.methods.remove(productId); // Remueve un producto del carrito
                renderShoppingCart(); // Renderiza el carrito de nuevo
                renderStore(); // Renderiza la tienda para actualizar el stock
            });
        });

        // Añade evento al botón para cerrar el carrito
        document.querySelector(".closeButton").addEventListener("click", e => {
            document.querySelector("#shopping-cart-container").classList.remove("show"); // Oculta el carrito
            document.querySelector("#shopping-cart-container").classList.add("hide");
        });

        const bPurchase = document.querySelector("#bPurchase");
        
        // Añade evento al botón de compra
        if (bPurchase) {
            bPurchase.addEventListener("click", e => {
                shoppingCart.methods.purchase(); // Realiza la compra
                renderShoppingCart();
                renderStore(); // Actualiza la tienda después de la compra
            });
        }
    });
}

// Llama a la función para mostrar la tienda inicialmente
renderStore();
