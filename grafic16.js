function grafic16(workbook) {       
    var rowObject = XLSX.utils.sheet_to_json(workbook.Sheets['Dashboard (3)'], {range: "DN4:DO17"});
    //delete rowObject[1]
    var labels = rowObject.map(function(e) {
        return e["Any"];
     });

    var dades = rowObject.map(function(e) {
        return e["poblacio_extranjera"] * 100;
     });



    const ctx = document.getElementById('myChart16').getContext('2d');
    const myChart = new Chart(ctx, {
        
        data: {
            labels: labels,
            datasets: [
                {
                    type: 'bar',
                   // label: "Índex ",
                    data: dades,
                    backgroundColor: 'rgba(95,95,95,1)',
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Immigració"
                },
                legend:{
                    position:'bottom',
                    align:'right' ,
                    display:false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
    
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y.toFixed(2) +"%";;
                            }
                            return label;
                        }
                    }
                },
                datalabels: {
                    display:false,
                   align: 'top',
                    anchor:'end',
                    clamp:true,
                    formatter: function(value, context) {
                        return Math.round(value) +"%";
                      },
                    color:'rgba(95,95,95,1)'
                  }
            },
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    title:{
                        display:true,
                        text:["Població procedent de","països en desenvolupament(%)"]
                    }
                    
                }
            }
        }
    });
    document.getElementById("16").style.display='block'
}
    