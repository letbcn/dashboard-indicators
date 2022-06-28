function grafic6(workbook) {       
    var rowObject = XLSX.utils.sheet_to_json(workbook.Sheets['Dashboard (3)'], {range: "BU77:CB87"});
    //rowObject = XLSX.utils.sheet_to_json(workbook.Sheets['Full1']);
    console.log(rowObject);

    var labels = rowObject.map(function(e) {
        return e["tCO2/hab."];
     });

     var data_gas = rowObject.map(function(e) {
        return e["Gas natural"];
     });
     var data_ele = rowObject.map(function(e) {
        return e["Electricitat"];
     });
     var data_residus = rowObject.map(function(e) {
        return e["Residus"];
     });
     var data_gasoil = rowObject.map(function(e) {
        return e["Gasoil"];
     });
     var data_hidraulica= rowObject.map(function(e) {
        return e["Hidraulica"];
     });
     var data_transport = rowObject.map(function(e) {
        return e["Transport"];
     });
     var data_glp = rowObject.map(function(e) {
        return e["GLP"];
     });




    const ctx = document.getElementById('myChart10').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels:labels,
            datasets: [
                   {
                     label: 'Gas Natural',
                    data: data_gas,
                    backgroundColor: 'rgba(237,125,49, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Electricitat',
                    data: data_ele,
                    backgroundColor: 'rgba(165,165,165, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Residus',
                    data: data_residus,
                    backgroundColor: 'rgba(255,192,0, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Gasoil',
                    data: data_gasoil,
                    backgroundColor: 'rgba(91,155,213, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'GLP',
                    data: data_glp,
                    backgroundColor: 'rgba(112,173,71, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Hidràulica',
                    data: data_hidraulica,
                    backgroundColor: 'rgba(197,224,180, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Transport',
                    data: data_transport,
                    backgroundColor: 'rgba(158,72,14, 1)',
                    stack: 'Stack 0'
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Gasos d'efecte hivernacle"
                },
                legend:{
                    position:'bottom',
                    align:'right',
                    display:false       
                },
                datalabels: {
                    //display:'auto',
                    display:false,
                    formatter: function(value, context) {
                        return value.toFixed(1);
                      },
                    labels: {
                      title: {
                        font: {
                          color:'white'
                        }
                      }
                    }
                  }
            },
            scales: {
                x: {
                    stacked: true,
                    },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: ['Emission de CO\u00B2','(tones de CO\u00B2 equivalent per habitant )']
                      }
                },
            }
        }
    });
    document.getElementById("10").style.display='block'
}

