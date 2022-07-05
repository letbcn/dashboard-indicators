function grafic19() {       

    d3.csv('data/socioeconomics/estudis_baixos_2019_2015.csv').then(function(data){
        estudis = data;
        filtre_estudis = estudis;
        filtre_estudis = estudis.filter(element => element.nommuni == "AMB");
        pintar19();
    });
}

function pintar19() {      
    
    data_estudis = filtre_estudis.map(function(e) {
        return  [e["2015"],e["2016"],e["2017"],e["2018"],e["2019"]];
     });

     

    const ctx = document.getElementById('myChart19').getContext('2d');
    myChart19 = new Chart(ctx, {
        
        data: {
            labels: ["2015","2016","2017","2018","2019"],
            datasets: [
                {
                    type: 'bar',
                    label: "Estudis baixos",
                    data: data_estudis[0],
                    backgroundColor: 'rgba(59,100,143,1)',
                }/*,
                {
                    type: 'bar',
                    label: "Sense estudis",
                    data: data_pensions,
                    backgroundColor: 'rgba(143,162,212,1)',
                }*/

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
    