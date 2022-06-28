function grafic17(workbook) {       
    var rowObject = XLSX.utils.sheet_to_json(workbook.Sheets['Dashboard (3)'], {range: "DQ4:DR8"});
    //delete rowObject[1]
    var labels = rowObject.map(function(e) {
        return e["Any"];
     });

    var dades = rowObject.map(function(e) {
        return e["ist"];
     });

    const ctx = document.getElementById('myChart17').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(112,173,71,1)');   
    gradient.addColorStop(1, 'rgba(94,145,60,1)');

    const myChart = new Chart(ctx, {
        
        data: {
            labels: labels,
            datasets: [
                {
                    type: 'bar',
                   // label: "Índex ",
                    data: dades,
                    backgroundColor: gradient
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Nivell Socioeconòmic"
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
                        //return Math.round(value) ;
                      }
                  }
            },
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    title:{
                        display:true,
                        text:['Índex Socioeconòmic Territorial','(respecte al total de Catalunya)']
                    },
                    suggestedMin: 80,
                    beginAtZero:false
                    
                    
                }
            }
        }
    });
    /*ctx.shadowColor = 'rgb(192,192,192)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;      */ 
    document.getElementById("17").style.display='block'
}
    