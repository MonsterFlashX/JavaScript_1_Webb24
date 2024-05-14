let linjeNummer = 1;

function läggRad() 
{
    const col1 = document.getElementById('new-col-1').value;
    const col2 = document.getElementById('new-col-2').value;
    const col3 = document.getElementById('new-col-3').value;

    const table = document.getElementById('table');
    const row = table.insertRow(-1);
    row.id = `row-${linjeNummer}`;

    const lineCell = row.insertCell(0);
    lineCell.innerHTML = `<input type="text" value="${linjeNummer}" readonly>`;

    const col1Cell = row.insertCell(1);
    col1Cell.innerHTML = `<input type="text" value="${col1}"`;

    const col2Cell = row.insertCell(2);
    col2Cell.innerHTML = `<input type="text" value="${col2}"`;

    const col3Cell = row.insertCell(3);
    col3Cell.innerHTML = `<input type="text" value="${col3}"`;

    const HandlingCell = row.insertCell(3);
    HandlingCell.innerHTML = `<button type="submit" onclick="taBortRad(${linjeNummer})">Ta bort</button>`;

    linjeNummer++;

    document.getElementById('new-col-1').value = '';
    document.getElementById('new-col-2').value = '';
    document.getElementById('new-col-3').value = '';

}
function raderaRad() 
{
    let minTabell = document.getElementById('minTabell');
    tabell.raderaRad(row.rowIndex);
    linjeNummer--;
    document.getElementById(linjeNummer).value = linjeNummer;
}

function raderaFörraRad() 
{
    let minTabell = document.getElementById('minTabell');
    let linjeNummerInmatning = document.getElementById('linjeNummer');
    let linjeNummerVärde = linjeNummerInmatning.value;
    if (linjeNummerVärde > 1) 
    {
        let raderaLinje = table.row[linjeNummerVärde - 1];
        raderaRad(raderaLinje);
        linjeNummerInmatning.value = linjeNummer;    
    }
}

function uppdateraLinjeNummer() 
{
    const rad = document.querySelectorAll('#table tr');
    rad.forEach((rad, index) => 
    {
        if (index > 0 ) 
        {
            const linjeCell = rad.cells[0];
            linjeCell.querySelectorAll('input').value = index   
        }
    });
    
}

