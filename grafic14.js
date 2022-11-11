function grafic14() {       

    d3.csv('data/socioeconomics/atur_2021_2005.csv').then(function(data){
        atur = data;
        filtre_atur = atur;
        filtre_atur = atur.filter(element => element.nommuni == "AMB");
        pintar14();
    });
}

function pintar14() {       

    data_atur = filtre_atur.map(function(e) {
        return  [e.atur_2005,e.atur_2006,e.atur_2007,e.atur_2008,e.atur_2009,e.atur_2010,e.atur_2011,e.atur_2012,e.atur_2013,e.atur_2014,e.atur_2015,e.atur_2016,e.atur_2017,e.atur_2018,e.atur_2019,e.atur_2020,e.atur_2021];
     });




    const ctx = document.getElementById('myChart14').getContext('2d');
    myChart14 = new Chart(ctx, {
        
        data: {
            labels: ["2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"],
            datasets: [
                {
                    type: 'bar',
                    //label: "Persones a l'atur",
                    data: data_atur[0],
                    backgroundColor: 'rgba(192,0,0,1)',
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:titol14
                },
                legend:{
                    position:'bottom',
                    align:'right' ,
                    display:false
                },
                datalabels: {
                    display:false,
                    formatter: function(value, context) {
                       // return Math.round(value);
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
                        display:true,
                        text:escala14
                    }
                }
            }
        }
    });
    document.getElementById("14").style.display='block'
}
    