function grafic20(workbook) {       
    var rowObject = XLSX.utils.sheet_to_json(workbook.Sheets['Dashboard (3)'], {range: "DW4:DX12"});
    //delete rowObject[1]
    var labels = rowObject.map(function(e) {
        return e["Any"];
     });

    var dades = rowObject.map(function(e) {
        return e["patents"];
     });



    const ctx = document.getElementById('myChart20').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(182,169,44,0.2)');   
    gradient.addColorStop(1, 'rgba(182,169,44,1)');
    const myChart = new Chart(ctx, {
        
        data: {
            labels: labels,
            datasets: [
                {
                    type: 'bar',
                   // label: "Patents ",
                    data: dades,
                    backgroundColor:'rgba(182,169,44,1)',
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Innovació"
                },
                legend:{
                    position:'bottom',
                    align:'right' ,
                    display:false
                },
                datalabels: {
                    display:false,
                    align: 'end',
                    anchor:'end',
                    offset:-30,
                    formatter: function(value, context) {
                        return value.toFixed(2) ;
                      }
                  }
            },
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    max:0.20,
                    title:{
                        display:true,
                        text:["Nombre de patents europees","per 1000 habitants"]
                    }
                    
                }
            }
        }
    });
    document.getElementById("20").style.display='block'
}
    