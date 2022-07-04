function grafic11() {       

    d3.csv('data/socioeconomics/poblacio/poblacio_2000_2020.csv').then(function(data){
        poblacio = data;
        filtre_pob = poblacio;
        filtre_pob = poblacio.filter(element => element.categoria == "AMB");
        d3.csv('data/socioeconomics/poblacio/densitat_2000_2020.csv').then(function(data){
            densitat = data;
            filtre_densitat= densitat;
            filtre_densitat = densitat.filter(element => element.categoria == "AMB");
        pintar11();
        }); 
    });
}

function pintar11() {       


    data_pob= filtre_pob.map(function(e) {
        return  [e.poblacio_2000,e.poblacio_2005,e.poblacio_2010,e.poblacio_2015,e.poblacio_2020];
     });

     
    data_densitat= filtre_densitat.map(function(e) {
        return  [e.densitat_2000,e.densitat_2005,e.densitat_2010,e.densitat_2015,e.densitat_2020];
     });
    const ctx = document.getElementById('myChart11').getContext('2d');
    myChart11 = new Chart(ctx, {
        
        data: {
            labels: ["2000","2005","2010","2015","2020"],
            datasets: [
                
                {
                    type: 'line',
                    label: "Densitat",
                    yAxisID: 'B',
                    data: data_densitat[0],
                    borderColor: 'rgb(204,153,255,0)',
                    pointRadius:5,
                    pointBackgroundColor:'rgb(204,153,255)'
                    
                },
                {
                    type: 'bar',
                    label: "Població",
                    yAxisID: 'A',
                    data: data_pob[0],
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
    