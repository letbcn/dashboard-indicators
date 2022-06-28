function grafic18(workbook) {       
    var rowObject = XLSX.utils.sheet_to_json(workbook.Sheets['Dashboard (3)'], {range: "ED4:EE12"});
    //delete rowObject[1]
    var labels = rowObject.map(function(e) {
        return e["Any"];
     });

    var dades = rowObject.map(function(e) {
        return e["demanda_hab"];
     });



    const ctx = document.getElementById('myChart18').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(255,192,0,1)');   
    gradient.addColorStop(1, 'rgba(214,161,0,1)');
    const myChart = new Chart(ctx, {
        
        data: {
            labels: labels,
            datasets: [
                {
                    type: 'bar',
                   // label: "Demanda ",
                    data: dades,
                    backgroundColor: gradient                    
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Habitatge"
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
                        return Math.round(value) ;
                      }
                  }
            },
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    title:{
                        display:true,
                        text:["Demanda d'habitatge protegit","per 1000 habitants"]
                    }
                    
                }
            }
        }
    });
    document.getElementById("18").style.display='block'
}
    