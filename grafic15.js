function grafic15(workbook) {       
    var rowObject = XLSX.utils.sheet_to_json(workbook.Sheets['Dashboard (3)'], {range: "EI4:EJ9"});
    //delete rowObject[1]
    var labels = rowObject.map(function(e) {
        return e["Any"];
     });

    var dades = rowObject.map(function(e) {
        return e["aturs"];
     });



    const ctx = document.getElementById('myChart15').getContext('2d');
    const myChart = new Chart(ctx, {
        
        data: {
            labels: labels,
            datasets: [
                {
                    type: 'bar',
                    //label: "Índex ",
                    data: dades,
                    backgroundColor: 'rgba(95,95,95,1)',
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Desigualtat"
                },
                legend:{
                    position:'bottom',
                    align:'right' ,
                    display:false
                },
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
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    title:{
                        display:true,
                        text:'Índex de Gini'
                    }
                }
            }
        }
    });
    document.getElementById("15").style.display='block'
}
    