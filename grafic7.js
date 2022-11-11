function grafic7() {       

    d3.csv('data/consum_aigua_13_20.csv').then(function(data){
        aigua = data;
        filtre_aigua = aigua;
        filtre_aigua = aigua.filter(element => element.nommuni == "AMB");
            pintar7();
        });
} 
function pintar7(){

    const ctx = document.getElementById('myChart7').getContext('2d');
    myChart7 = new Chart(ctx, {
        
        data: {
            labels: ["2013","2014","2015","2016","2017","2018","2019","2020"],
            datasets: [
                {
                    type: 'bar',
                    //label: "Aigua",
                    data: [filtre_aigua[0]['2013'],filtre_aigua[0]['2014'],filtre_aigua[0]['2015'],filtre_aigua[0]['2016'],filtre_aigua[0]['2017'],filtre_aigua[0]['2018'],filtre_aigua[0]['2019'],filtre_aigua[0]['2020']],
                    spanGaps: true,
                    backgroundColor: 'rgba(0,130,176,1)'
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:titol7
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
                    title: {
                        display: true,
                        text: escala7
                      }
                }
            }
        }
    });
    document.getElementById("7").style.display='block'
}
    