function grafic13() {       

    d3.csv('data/socioeconomics/pib_2011_2019.csv').then(function(data){
        prod = data;
        filtre_prod = prod;
        filtre_prod = prod.filter(element => element.municipi == "AMB");
        pintar13();
    });
}

function pintar13() {     

    data_prod = filtre_prod.map(function(e) {
        return  [e.pib_2011,e.pib_2012,e.pib_2013,e.pib_2014,e.pib_2015,e.pib_2016,e.pib_2017,e.pib_2018,e.pib_2019];
     });


    const ctx = document.getElementById('myChart13').getContext('2d');
    myChart13 = new Chart(ctx, {
        
        data: {
            labels: ["2011","2012","2013","2014","2015","2016","2017","2018","2019"],
            datasets: [
                {
                    type: 'bar',
                    //label: "PIB",
                    data: data_prod[0],
                    backgroundColor: 'rgba(46,117,182,1)',
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:titol13
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
                        text: escala13
                      }
                }
            }
        }
    });
    document.getElementById("13").style.display='block';
}
    