function grafic19(workbook) {       
    var rowObject = XLSX.utils.sheet_to_json(workbook.Sheets['Dashboard (3)'], {range: "DJ4:DL7"});
    //delete rowObject[1]
    var labels = rowObject.map(function(e) {
        return e["Any"];
     });

    var data_salari = rowObject.map(function(e) {
        return e["baixa_quali"]*100;
     });

     var data_pensions = rowObject.map(function(e) {
        return e["sense_estudis"]*100;
     });

     

    const ctx = document.getElementById('myChart19').getContext('2d');
    const myChart = new Chart(ctx, {
        
        data: {
            labels: labels,
            datasets: [
                {
                    type: 'bar',
                    label: "Baixa qualificació",
                    data: data_salari,
                    backgroundColor: 'rgba(59,100,143,1)',
                },
                {
                    type: 'bar',
                    label: "Sense estudis",
                    data: data_pensions,
                    backgroundColor: 'rgba(143,162,212,1)',
                }

            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Formació"
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
                                label += context.parsed.y +"%";;
                            }
                            return label;
                        }
                    }
                },
                datalabels: {
                    //display:'auto',
                    display:false,
                    formatter: function(value, context) {
                        return Math.round(value) +"%";
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
                    title:{
                        display:true,
                        text:["Població amb estudis primaris","o sense estudis (%)"]
                    }
                    },
            }
        }
    });
    document.getElementById("19").style.display='block'
}
    