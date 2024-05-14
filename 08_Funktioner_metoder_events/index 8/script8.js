let body = document.getElementById("body")
body.style.border = "1px gray solid";

function makeNavBar()
{
 let nav = document.createElement('nav');
 body.appendChild(nav);
}

function makeHeaderOne(text="", id="") 
{
    let h1 = document.createElement("h1");
    h1.innerText = Text;
    h1.setAttribute("id", id);
    return h1;
}

function makeHeaderTwo(text="", id="") 
{
    let h1 = document.createElement("h2");
    h2.innerText = Text;
    h2.setAttribute("id", id);
    return h2;
}

function makeTable(rowCount, colCount)
{
    //table, table row, table header, table data
    let table = document.createElement("table");

    //rows

    for (let row = 0; row < rowCount; row++) 
    {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        //col
        for (let col = 0; col < colCount; col++)
        {
            if (row === 0)
            {
                let td = document.createElement("th");
                th.setAttribute("id", row + ":" + col);
                th.innerText = row + ":" + col;
                tr.appendChild(th);
            }
            else
            {
                let td = document.createElement("td");
                td.setAttribute("id", row + ":" + col);
                td.innerText = row + ":" + col;
                tr.appendChild(td);
            }
        }   
    }
    return table; 

    function makeArticle(id, cls)
    {
        function makeParagraph(text, id)
        {
            let p = document.createElement("p");
            p.innerText = text;
            p.setAttribute("id", id);
            return p; 
        }
    }
}

function makeTable(rowCount, colCount)
{
    
}
function makeArticle(id, cls) //cls is class
{
    let article = document.createElement("article");
    article.setAttribute("id", id);
    article.setAttribute("class", cls);
    return article;
}


let isBuild = false;

//building webpage 

function buildWebsite()
{
    if(isBuild === false)
    {
        makeNavBar();
        body.appendChild(makeHeaderOne("04_JS_var_flode_DOM", "h1"));
        body.appendChild(makeHeaderTwo("Table with table rows, headers, and rows"));
       
        let table = makeTable(5, 5);
        body.appendChild(table);
       
       let article1 = makeArticle("article_1", "articles");
       article1.appendChild(makeHeaderOne("This is header", ""));
       article1.style.backgroundColor = "red";
       article1.appendChild(makeParagraph("", "This is paragraph 1" ));
       article2.appendChild(makeParagraph("", "This is paragraph 2" ));
       
       let article2 = makeArticle("article_2", "articles");
       article2.appendChild(makeHeaderTwo("This is header", ""));
       article2.appendChild(makeParagraph("", "This is paragraph 1" ));
       article2.appendChild(makeParagraph("", "This is paragraph 2" ));
       isBuild = true;
       console.log("flag sets to true");

       let allPs = document.getElementsByTagName("p")
       for (let index = 0; index < allPs.length; index++) 
       {
         const element = array[index];
          allPs[index].style.border="1px solid black";
       }
    }
}


function clearWebpage()
{
    let btn1 = document.getElementById("button1");
    console.log(btn1);
    let btn2 = document.getElementById("button2");
    console.log(btn2);
    let script = document.getElementById("script");
    console.log(script);
    body.replaceChildren();
    body.appendChild(btn1);
    body.appendChild(btn2);
    body.appendChild(script);
    isBuild = false;
    console.log("flag sets to false");

}

function rotate()
{
    let article1 = document.getElementById("article_1");
    article1.style.animation = "";
}
let allPs = document.getElementsByTagName("p")
for (let index = 0; index < allPs.length; index++) {
    const element = array[index];
    allPs[index].style.border="1px solid black";
}

function webpageStyling()
{

}