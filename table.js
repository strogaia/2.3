function moveOneUp(){
    // возможный алгоритм:
    // 1) найти строку где продукт 1
    var first = document.getElementById("table").firstElementChild;
    console.log(first);
    // 2) найти строку где продукт 2
    var second = document.getElementsByClassName("row")[1];
    console.log(second);
    // 3) улалить строку 2 но запомнить ее в переменую
    var n = second;
    document.getElementById("table").removeChild(second);
    // 4) добавить 2 строку из переменной в начало родительской таблицы
    var div = document.createElement('n');
    div.className = "row";
    //table.appendChild(n);
    var newtable = document.getElementById("table");
    newtable.insertBefore(n, first);
  }
  
function moveOneDown() {
    // тот же алг. что и в пред. функции только с продуктами 2 и 3
    // 1) найти строку где продукт 2
    var second = document.getElementsByClassName("row")[1]
    // 2) найти строку где продукт 3
    var third = document.getElementsByClassName("row")[2];
    // 3) улалить строку 3 но запомнить ее в переменую
    var n = third;
    document.getElementById("table").removeChild(third);
    // 4) добавить 3 строку из переменной перед 2 элементом в родительской таблицы
    var div = document.createElement('n');
    div.className = "row";
    // table.appendChild(n);
    var newtable = document.getElementById("table");
    newtable.insertBefore(n, second);
  }
  
