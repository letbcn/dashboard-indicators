function grafic13(workbook) {       
    var rowObject = XLSX.utils.sheet_to_json(workbook.Sheets['Dashboard (3)'], {range: "CZ4:DA7"});
    //delete rowObject[1]
    var labels = rowObject.map(function(e) {
        return e["Any"];
     });

    var dades = rowObject.map(function(e) {
        return e["PIB"];
     });



    const ctx = document.getElementById('myChart13').getContext('2d');
    const myChart = new Chart(ctx, {
        
        data: {
            labels: labels,
            datasets: [
                {
                    type: 'bar',
                    //label: "PIB",
                    data: dades,
                    backgroundColor: 'rgba(46,117,182,1)',
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Productivitat"
                },
                legend:{
                    position:'bottom',
                    align:'right' ,
                    display:false
                },
                datalabels: {
                    display:false,
                    formatter: function(value, context) {
                        return value.toFixed(1);
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
                    title: {
                        display: true,
                        text: 'PIB per càpita (milers €)'
                      }
                }
            }
        }
    });
    document.getElementById("13").style.display='block';
}
    