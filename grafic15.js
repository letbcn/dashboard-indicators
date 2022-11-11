function grafic15() {       

    d3.csv('data/socioeconomics/gini_2015_2019.csv').then(function(data){
        gini = data;
        filtre_gini = gini;
        filtre_gini = gini.filter(element => element.nommuni == "AMB");
        pintar15();
    });
}

function pintar15() {     

    data_gini = filtre_gini.map(function(e) {
        return  [e.gini2015,e.gini2016,e.gini2017,e.gini2018,e.gini2019];
     });
    const ctx = document.getElementById('myChart15').getContext('2d');
    myChart15 = new Chart(ctx, {
        
        data: {
            labels: ["2015","2016","2017","2018","2019"],
            datasets: [
                {
                    type: 'bar',
                    //label: "Índex ",
                    data: data_gini[0],
                    backgroundColor: 'rgba(95,95,95,1)',
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:titol15
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
                        text:escala15
                    }
                }
            }
        }
    });
    document.getElementById("15").style.display='block'
}
    