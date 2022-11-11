function grafic12() {       

    d3.csv('data/socioeconomics/renda_2019_2010.csv').then(function(data){
        renda = data;
        filtre_renda = renda;
        filtre_renda = renda.filter(element => element.nommuni == "AMB");
        pintar12();
    });
}

function pintar12() {     

    data_renda = filtre_renda.map(function(e) {
        return  [e.rfdb_2010,e.rfdb_2011,e.rfdb_2012,e.rfdb_2013,e.rfdb_2014,e.rfdb_2015,e.rfdb_2016,e.rfdb_2017,e.rfdb_2018,e.rfdb_2019];
     });

    const ctx = document.getElementById('myChart12').getContext('2d');

   

    myChart12 = new Chart(ctx, {
        
        data: {
            labels: ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"],
            datasets: [
                {
                    type: 'bar',
                    //label: label12,
                    data: data_renda[0],
                    backgroundColor: 'rgba(91,155,213,1)',
                }

            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:titol12,
                    
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
                
                    y: {
                    title: {
                        display: true,
                        text: escala12
                      }
                    },
            }
        }
    });
    document.getElementById("12").style.display='block'
}
    