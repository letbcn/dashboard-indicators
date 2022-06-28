function grafic12(workbook) {       
    var rowObject = XLSX.utils.sheet_to_json(workbook.Sheets['Dashboard (3)'], {range: "DC4:DH8"});
    //delete rowObject[1]
    var labels = rowObject.map(function(e) {
        return e["Any"];
     });

    var data_salari = rowObject.map(function(e) {
        return e["Salari"];
     });

     var data_pensions = rowObject.map(function(e) {
        return e["Pensions"];
     });

     var data_altres = rowObject.map(function(e) {
        return e["Altres ingresos"];
     });

     var data_atur = rowObject.map(function(e) {
        return e["Atur"];
     });

     var data_prestacions = rowObject.map(function(e) {
        return e["Altres prestacions"];
     });



    const ctx = document.getElementById('myChart12').getContext('2d');
    const myChart = new Chart(ctx, {
        
        data: {
            labels: labels,
            datasets: [
                {
                    type: 'bar',
                    label: "Salari",
                    data: data_salari,
                    backgroundColor: 'rgba(68,114,196,1)',
                },
                {
                    type: 'bar',
                    label: "Pensions",
                    data: data_pensions,
                    backgroundColor: 'rgba(165,165,165,1)',
                },
                {
                    type: 'bar',
                    label: "Altres ingressos",
                    data: data_altres,
                    backgroundColor: 'rgba(91,155,213,1)',
                },
                {
                    type: 'bar',
                    label: "Atur",
                    data: data_atur,
                    backgroundColor: 'rgba(38,68,120,1)',
                },
                {
                    type: 'bar',
                    label: "Altres prestacions",
                    data: data_prestacions,
                    backgroundColor: 'rgba(99,99,99,1)',
                }

            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Nivell de renda",
                    
                },
                legend:{
                    position:'bottom',
                    align:'right' ,
                    display:false
                },
                datalabels: {
                    //display:'auto',
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
                x: {
                    stacked: true,
                    },
                    y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Renda per càpita (€)'
                      }
                    },
            }
        }
    });
    document.getElementById("12").style.display='block'
}
    