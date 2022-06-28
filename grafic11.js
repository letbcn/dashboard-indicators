function grafic11(workbook) {       
    var rowObject = XLSX.utils.sheet_to_json(workbook.Sheets['Dashboard (3)'], {range: "DZ4:EB8"});
    //rowObject = XLSX.utils.sheet_to_json(workbook.Sheets['Full1']);
    console.log(rowObject);

    var labels = rowObject.map(function(e) {
        return e.Any;
     });

    var data_poblacio = rowObject.map(function(e) {
        return e.poblacio;
     });

     var data_densitat = rowObject.map(function(e) {
        return e.densitat;
     });

    const ctx = document.getElementById('myChart11').getContext('2d');
    const myChart = new Chart(ctx, {
        
        data: {
            labels: labels,
            datasets: [
                
                {
                    type: 'line',
                    label: "Densitat",
                    yAxisID: 'B',
                    data: data_densitat,
                    borderColor: 'rgb(204,153,255,0)',
                    pointRadius:5,
                    pointBackgroundColor:'rgb(204,153,255)'
                    
                },
                {
                    type: 'bar',
                    label: "Població",
                    yAxisID: 'A',
                    data: data_poblacio,
                    backgroundColor: 'rgba(81,35,115, 1)',
                    datalabels: {
                        display:false,
                        formatter: function(value, context) {
                            return Math.round(value);
                          },
                        labels: {
                          title: {
                            font: {
                              weight: 'bold',
                              color:'white'
                            }
                          }
                        }
                      }
                },
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:'Població'
                },
                legend:{
                    position:'bottom',
                    align:'right', 
                    display:false      
                }
            },
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: "Nombre d'habitants",
                      },
                    ticks: {
                        beginAtZero: true
                    }
                },
                B: {
                    type: 'linear',
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Densitat de població (habitants/km\u00B2) '
                      },
                    beginAtZero: true
                    
                },
            }
        }
    });
    document.getElementById("11").style.display='block'
}
    