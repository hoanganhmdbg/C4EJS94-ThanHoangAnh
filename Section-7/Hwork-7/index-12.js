let items = ['Backpack','MiBand watch','Ring'];
console.log(items);
let list = document.getElementById('item_list_ul');
console.log(list);
for (let i = 0;i < items.length;i ++) {
    list.insertAdjacentHTML('beforeend',`<li>${items[i]}</li>`);
}
console.log(list);

list.innerHTML = "";

// list.removeChild(list.childNodes[3]);




